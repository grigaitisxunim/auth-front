import React from "react";
import * as C from "./styled"

const ButtonSubmit = ({ Text = "button" }) => {
  return (
    <C.ButtonSubmit>
      {Text}
    </C.ButtonSubmit>
  );
};

export default ButtonSubmit;
