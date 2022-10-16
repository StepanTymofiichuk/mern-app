import React, { useState, useEffect } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password1: "",
    password2: ""
  });
  const { name, password1, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <p>Name:</p>
        <input type="text" id="name" name="name" value={name} onChange={onChange} /><br />
        <p>Password:</p>
        <input type="text" id="password1" name="password1" value={password1} onChange={onChange} /><br />
        <p>Confirm password:</p>
        <input type="text" id="password2" name="password2" value={password2} onChange={onChange} /><br />
        <p><button type="submit" onSubmit={onSubmit}>Submit</button></p>
      </form>
    </div>
  )
}

export default Register