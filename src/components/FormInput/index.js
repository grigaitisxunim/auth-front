import React from "react";
import * as C from "./styled";
import Input from "../Input";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import api from "../../services/Api.js";

const Formtruedesk = () => {
  const [title, setSubject] = useState("");
  const [description, setIssue] = useState("");

  const createTicket = async (data) => {
    try {
      await api
        .post("/api/createworkitem", data, {
        })
        .then(async (res) => {
          alert("Work Item criado com sucesso!");
        })
        .catch((error) => {
          alert(
            error?.response?.data?.error || "Houve um erro inesperado!"
          );
        });
    } catch (err) {
      console.log(err);
      return true;
    }
  };

  const handleSubmit = async (data) => {
    await createTicket({
      title: title,
      descrtiption: description
    });
  };

  return (
    <>
      <C.Wrapper>
        <C.Container onSubmit={handleSubmit}>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label htmlFor="TextArea">Description</label>
          <C.TextArea
            value={description}
            onChange={(e) => setIssue(e.target.value)}
          />
          <ButtonSubmit Text="Submit" type="submit" />
        </C.Container>
      </C.Wrapper>
    </>
  );
};

export default Formtruedesk;
