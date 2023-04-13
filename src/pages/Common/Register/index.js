import { useFormik } from "formik";
import api from "../../../services/Api";
import "./cadastro.css";
import montdlogo from "../../../assets/imgs/montd.logo.png";
import useAuth from "../../../hooks/useAuth";
import * as C from "./styled";

const Register = () => {
  const token = "6c2ec73f72d7cb766bb397a2373a09b32cf2e63d";
  const submitForm = async (data) => {
    let err1 = await submitCreateUser(data);
    window.location.href = "/login";

    if (err1) {
      alert(
        "Não foi possível efetuar seu cadastro, tente novamente mais tarde"
      );
    } else {
      alert("Cadastro efetuado com sucesso");
    }
  };
  const submitCreateUser = async (data) => {
    try {
      await api
        .post("/api/register", data, {})
        .then(async (res) => {
          localStorage.setItem("user_id", res.data.id);
          localStorage.setItem("company_id", res.data.company_id);
        })
        .then(async (res) => {
         
        });
    } catch (err) {
      console.log(err);
      return true;
    }
  };



  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: submitForm,
  });

  const { authorized } = useAuth();

  if (authorized) {
    window.location.href = "/home";
  }

  return (
    <>
      <title>Login</title>
      <div className="barra">
        <img src={montdlogo} alt="" height="100%" />
      </div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <span className="login-form-title"> Faça seu cadastro </span>

              <div className="wrap-input margin-top-35 margin-bottom-35">
                <input
                  className="input-form"
                  type="text"
                  name="username"
                  autoComplete="on"
                  id="username"
                  placeholder=" "
                  required
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <span
                  className="focus-input-form"
                  data-placeholder="Username"
                ></span>
              </div>

              <div className="wrap-input margin-top-35 margin-bottom-35">
                <input
                  className="input-form"
                  type="text"
                  name="email"
                  autoComplete="on"
                  id="email"
                  placeholder=" "
                  required
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <span
                  className="focus-input-form"
                  data-placeholder="E-mail"
                ></span>
              </div>

              

              <div className="wrap-input margin-bottom-35">
                <input
                  className="input-form"
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  required
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
                  cadastro
                </button>
              </div>

              <ul className="login-utils">
                <li>
                  <span className="text1"> Já possui uma conta? </span>
                  <C.Login to="/login">&nbsp;Login</C.Login>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
