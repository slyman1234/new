import React, { useEffect, useState } from "react";
import {
  Container,
  Bodycontent,
  LeftContent,
  RightContent,
  Headerone,
} from "./dashboard.styled";

import Navbar from "./navbar/Navbar";

const Dashboard = () => {
  const [category, setCategory] = useState([]);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const json = localStorage.getItem("category");
    const loadedCategories = JSON.parse(json);
    if (loadedCategories) {
      setCategory(loadedCategories);
    }
  }, []);

  useEffect(() => {
    const json = localStorage.getItem("books");
    const loadedBooks = JSON.parse(json);
    if (loadedBooks) {
      setBook(loadedBooks);
    }
  }, []);

  useEffect(() => {
    const json = localStorage.getItem("category");
    const loadedCategories = JSON.parse(json);
    if (loadedCategories) {
      setCategory(loadedCategories);
    }
  }, []);

  return (
    <Container>
      <Navbar />

      <Bodycontent>
        <LeftContent>
          <Headerone>Total Categories</Headerone>

          <Headerone>{category.length}</Headerone>
        </LeftContent>
        <RightContent>
          {" "}
          <Headerone>Total Books</Headerone>
          <Headerone>{book.length}</Headerone>
        </RightContent>
      </Bodycontent>
    </Container>
  );
};

export default Dashboard;
