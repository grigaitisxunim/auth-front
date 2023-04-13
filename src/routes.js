import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Common/Register";
import Login from "./pages/Common/Login";
import Home from "./pages/Common/HomePage";
import useAuth from "./hooks/useAuth";
import Chamados from "./pages/Common/Chamados";
import NavBar from "./components/NavBar";


const Private = ({ Item }) => {
  const { authorized } = useAuth();

  if (!authorized) {
    window.location.href = "/";
  }

  return (
    <>
      <NavBar />
      <Item />
    </>
  );
};
export default function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route element={<Register />} exact path="/register" />
          <Route element={<Login />} exact path="/login" />
          <Route element={<Private Item={Chamados} />} exact path="/chamados" />
          <Route element={<Private Item={Home} />} exact path="/home" />
          <Route element={<Login />} exact path="*" />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
