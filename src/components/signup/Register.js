import React, { useState } from "react";
import {
  Form,
  Formbutton,
  Horizontalrule,
  Registerbutton,
} from "./Register.styled";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import Forminput from "./Forminput";

const Register = () => {
  const navigate = useNavigate();

  const { addToast } = useToasts();

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
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "fullname",
      type: "text",
      errorMessage:
        "Username Is betwen 3-16 charcaters withou special characters.",
      placeholder: "Fullname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Password must be inputed",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("user", JSON.stringify(values));

    addToast("Registration Succesfull! Redirecting to login page", {
      appearance: "success",
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
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

        <Formbutton type="submit">Register an account</Formbutton>
        <Horizontalrule />

        <Registerbutton onClick={() => navigate("/")}>
          Signin to your account{" "}
        </Registerbutton>
      </Form>
    </div>
  );
};

export default Register;
