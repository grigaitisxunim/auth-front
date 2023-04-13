import { useFormik } from "formik";
import api from "../../../services/Api";
import montdlogo from "../../../assets/imgs/montd.logo.png";
import useAuth from "../../../hooks/useAuth";
import * as C from "./styled";

const Login = () => {
 

  const submitLogin = (data) => {
    api
      .post("/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/home";
      })
      .catch((error) => {
        alert(error?.response?.data?.error || "Houve um erro inesperado!");
      });
  };


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: submitLogin,
  });
  const { authorized } = useAuth();

  if (authorized) {
    window.location.href = "/home";
  }

  return (
    <>
      <div className="barra">
        <img src={montdlogo} alt="" height="100%" />
      </div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <span className="login-form-title">Faça o login</span>

              <div className="wrap-input margin-top-35 margin-bottom-35">
                <input
                  className="input-form"
                  type="text"
                  id="login"
                  name="username"
                  autoComplete="on"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <span
                  className="focus-input-form"
                  data-placeholder="Username"
                ></span>
              </div>

              <div className="wrap-input margin-bottom-35">
                <input
                  className="input-form"
                  type="password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <span
                  className="focus-input-form"
                  data-placeholder="Senha"
                ></span>
              </div>

              <div className="container-login-form-btn">
                <button type="submit" className="login-form-btn">
                  Login
                </button>
              </div>
              <ul className="login-utils">
                <li className="margin-bottom-8 margin-top-8">
                  <span className="text1">Esqueceu sua senha?</span>
                </li>
                <li>
                  <span className="text1">Não tem conta?</span>
                  <C.Register to="/register">&nbsp;Registre-se</C.Register>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
