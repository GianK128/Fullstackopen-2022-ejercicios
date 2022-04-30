import React from "react";

const Input = ({ label, value, handleChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input
              value={value}
              onChange={handleChange}
            />
        </div>
    )
}

export default Input