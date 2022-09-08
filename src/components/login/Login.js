import React, { useState } from "react";
import {
  Form,
  Formbutton,
  Horizontalrule,
  Registerbutton,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";

import { useToasts } from "react-toast-notifications";
import Forminput from "./Forminput";

const Login = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage:
        "Username Is betwen 3-16 charcaters withou special characters.",
      placeholder: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Password must be inputed",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const getuserArr = sessionStorage.getItem("user");

    const { username, password } = values;

    if (getuserArr && getuserArr.length) {
      const userdata = JSON.parse(getuserArr);

      if (username === userdata.username && password === userdata.password) {
        addToast("Login details verified", {
          appearance: "success",
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        addToast("Wrong login details", {
          appearance: "error",
        });
      }
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <Formbutton type="submit">Signin to your account </Formbutton>
        <Horizontalrule />

        <Registerbutton onClick={() => navigate("/register")}>
          Register an account
        </Registerbutton>
      </Form>
    </div>
  );
};

export default Login;
