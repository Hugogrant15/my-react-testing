import React, {useState} from 'react'

const MyComponent = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("sponegbob");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const updateEmploymentStatus = () => {
        setIsEmployed(!isEmployed)
    }


  return (
    <>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>

        <p>age: {age}</p>
        <button onClick={updateAge}>Set Age</button>

        <p>is employed: {isEmployed ? "yes" : "no"}</p>
        <button onClick={updateEmploymentStatus}>Toggle status</button>

    </>
  )
}

export default MyComponent
