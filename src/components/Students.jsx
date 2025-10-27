import React from 'react'
import PropTypes from "prop-types";


// propTypes = a mechanism that ensures that the passed
//  value is of the correct data type 
// age: propTypes.number

const Students = (props) => {
  return (
    <div>
        <div>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    </div>
  )
}

Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,

}

Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Students