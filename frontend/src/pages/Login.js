import React, { useState, useEffect } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    password1: "",
  });
  const { password1 } = formData;
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
      <h1>Login Form</h1>
      <form>
        <p>Password:</p>
        <input type="text" id="password1" name="password1" value={password1} onChange={onChange} /><br />
        <p><button type="submit" onSubmit={onSubmit}>Submit</button></p>
      </form>
    </div>
  )
}

export default Login