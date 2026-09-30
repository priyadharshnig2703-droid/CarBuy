import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage"
function StudentForm()
{

const[ student,setStudent] = useState(
    {
    name: "",
     email: "",
     password: ""
    }
)
const[errors, setErrors] = useState({})
const saveData = useLocalStorage(student)

const handleSubmit = (event) =>{
    event.preventDefault();
    const newErrors = {}

    if(student.name === ""){

        newErrors.name = "Name is Required"
        }
        if (student.email ===""){
            newErrors.email = "Email is Required"
        }
        if(student.password ==="")
        {
            newErrors.password = "Passowrd is Required"
        }
        setErrors(newErrors)
      


if(Object.keys(newErrors).length === 0)
{
     saveData()
}


}
const handleChange =(event) =>
{
    setStudent
    (
        {
        ...student,
        [event .target.name]: event.target.value
        }
    )
}
return(
    <form onSubmit= {handleSubmit} >
    <input onChange ={handleChange} type=" text"
    name ="name"
    value= {student.name} 
    placeholder="Enter name"/>

    <input onChange ={handleChange} type=" email"
    name ="email"
    value= {student.email}
    placeholder="Enter email" />

    <input onChange ={handleChange} type ="password"
    name ="password"
    value={ student.password}
    placeholder="Enter password"/>


    <button type ="submit"> Submit</button>
     </form>
)
}
    export default StudentForm;