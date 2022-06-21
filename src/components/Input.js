import React from "react";

const TextInput = ({ type = "text", placeholder = "Input Here", ...props}) => {
    return <input type={type} placeholder={placeholder} {...props}/>;
};

export default TextInput;