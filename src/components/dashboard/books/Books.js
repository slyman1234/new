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
} from "./Books.styled";
import Navbar from "../navbar/Navbar";

import { useToasts } from "react-toast-notifications";
import Forminput from "./Forminput";

const Books = () => {
  const [book, setBook] = React.useState([]);

  React.useEffect(() => {
    const json = localStorage.getItem("books");
    const loadedBooks = JSON.parse(json);
    if (loadedBooks) {
      setBook(loadedBooks);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(book);
    localStorage.setItem("books", json);
  }, [book]);

  const { addToast } = useToasts();

  const [values, setValues] = useState({
    book: "",
  });

  const inputs = [
    {
      id: 1,
      name: "book",
      type: "text",
      errorMessage: "Book Is betwen 3-16 charcaters withou special characters.",
      placeholder: "Enter Book name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const books = [
      {
        id: new Date().getTime(),
        book: values.book,
      },
    ];

    setBook([...book].concat(books));

    addToast("Book Added Succesfully", {
      appearance: "success",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function deleteTodo(id) {
    let updatedBook = [...book].filter((book) => book.id !== id);
    setBook(updatedBook);
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

          <Formbutton type="submit">Add Book</Formbutton>
        </Form>

        <Categorylist>
          <Tablelist>
            <tr>
              <Tableheade> Id </Tableheade>
              <Tableheade> Book</Tableheade>
            </tr>

            {book.map((book) => (
              <tr>
                <Tablebody>{book.id}</Tablebody>
                <Tablebody>{book.book}</Tablebody>

                <td>
                  {" "}
                  <button onClick={() => deleteTodo(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </Tablelist>
        </Categorylist>
      </Categoryform>
    </Container>
  );
};

export default Books;
