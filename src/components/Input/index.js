import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, id }) => {
  return (
    <C.Input
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
