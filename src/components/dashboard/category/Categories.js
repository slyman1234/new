import React, { useState } from "react";

import {
  Container,
  Categoryform,
  Form,
  Formbutton,
  Categorylist,
  Tablelist,
  Tableheade,
  Tablebody,
} from "./Categories.styled";
import Navbar from "../navbar/Navbar";

import { useToasts } from "react-toast-notifications";
import Forminput from "./Forminput";

const Categories = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    const json = localStorage.getItem("category");
    const loadedCategories = JSON.parse(json);
    if (loadedCategories) {
      setCategory(loadedCategories);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(category);
    localStorage.setItem("category", json);
  }, [category]);

  const { addToast } = useToasts();

  const [values, setValues] = useState({
    category: "",
  });

  const inputs = [
    {
      id: 1,
      name: "category",
      type: "text",
      errorMessage:
        "Category Is betwen 3-16 charcaters withou special characters.",
      placeholder: "Enter Category",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const categories = [
      {
        id: new Date().getTime(),
        category: values.category,
      },
    ];

    setCategory([...category].concat(categories));

    addToast("Category Added Succesfully", {
      appearance: "success",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function deleteTodo(id) {
    let updatedCategory = [...category].filter((categor) => categor.id !== id);
    setCategory(updatedCategory);
  }
  return (
    <Container>
      <Navbar />

      <Categoryform>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Forminput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <Formbutton type="submit">Add Category</Formbutton>
        </Form>

        <Categorylist>
          <Tablelist>
            <tr>
              <Tableheade  rowspan="2"> Id </Tableheade>
              <Tableheade rowspan="2"> Category</Tableheade>
            </tr>

            {category.map((categor) => (
              <tr>
                <Tablebody rowspan="2">{categor.id}</Tablebody>
                <Tablebody rowspan="2">{categor.category}</Tablebody>

                <td>
                  {" "}
                  <button onClick={() => deleteTodo(categor.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </Tablelist>
        </Categorylist>
      </Categoryform>
    </Container>
  );
};

export default Categories;
