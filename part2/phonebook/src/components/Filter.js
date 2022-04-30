import React from "react";
import Input from "./Input";

const Filter = ({ label, handleChange }) => {
    return (
        <Input 
            label={label}
            handleChange={handleChange}
        />
    )
}

export default Filter