import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const[ login,setLogin] = useState(
        {
            email: "",
            password: ""
        }
    )
    const navigate = useNavigate()



    const handleChange =(event) =>
{
    setLogin
    (
        {
        ...login,
        [event.target.name]: event.target.value
        }
    )
}
const handleSubmit = (event) => {
  event.preventDefault();

  const storedStudent = JSON.parse(localStorage.getItem("student"));

  if (
    storedStudent &&
    login.email === storedStudent.email &&
    login.password === storedStudent.password
  ) {

    console.log("Login successful");
    navigate("/");
  } 
  else {
    console.log("Invalid email or password");
  }
};
return (
<form onSubmit = {handleSubmit}>
<input name="email" type="email" placeholder="Enter email" value={login.email} onChange={handleChange}/> 
         

<input name="password" type="password" placeholder="Enter password" value={login.password} onChange={handleChange}/>
<button type="submit">Login</button>
</form>
);
}

export default Login;