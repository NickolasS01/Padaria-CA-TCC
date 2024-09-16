// Login.js
import React, { useState, } from 'react';
import './login.css';
import NavMenu from '../NavMenu/NavMenu';
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { Link } from "react-router-dom";



function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
    
  });

  const handleLogin = (values) => {
    Axios.post("http://localhost:3005/Login", {
      email: values.email,
      senha: values.senha,
    }).then((response) => {
      alert(response.data.msg);
      window.location.href = "/home";
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    senha: yup.string().required("A senha é obrigatória")
  });

  return (
    <>
    
      <NavMenu />
      <div id="Corpo">
        <div id="login-container">
          <div id="login-form-box">
            <h2>Login</h2>
            <Formik
              initialValues={{ email: '', senha: '' }}
              onSubmit={handleLogin}
              validationSchema={validationsLogin}
            >
              <Form>
                <div id="textbox-email" className="textbox">
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className="form-field"
                  />
                  <ErrorMessage component="span" name="email" className="form-error" />
                </div>
                <div id="textbox-senha" className="textbox">
                  <Field
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    className="form-field"
                  />
                  <ErrorMessage component="span" name="senha" className="form-error" />
                </div>
                <button id="login-button" className="btn" type="submit">
                  Entrar
                </button>
              </Form>
            </Formik>
            <Link to="/cadastro">Cadastrar-se</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;