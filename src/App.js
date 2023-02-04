import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormInput = (event) => {
    //const formEvent = event.target;
    setFormData((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value,
      };
    });
  };

  console.log(formData.name);
  return (
    <div className="App">
      <h1>Form input</h1>
      <form className="form">
        <label>
          First name
          <input type="text" onChange={handleFormInput} name="firstName" />
        </label>
        <label>
          Last name
          <input type="text" onChange={handleFormInput} name="lastName" />
        </label>
        <label>
          Email
          <input type="email" onChange={handleFormInput} name="email" />
        </label>
        <label>
          Date of birth
          <input type="date" onChange={handleFormInput} name="dateOfBirth" />
        </label>
        <label>
          Password
          <input type="password" onChange={handleFormInput} name="password" />
        </label>
        <label>
          Confirm password
          <input
            type="password"
            onChange={handleFormInput}
            name="confirmPassword"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
