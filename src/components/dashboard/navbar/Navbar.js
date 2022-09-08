import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  Navbrand,
  Navcontent,
  Unoderlist,
  Listitem,
  Categorieslink,
  Links,
  Buttonlogout,
} from "./Navbar.styled";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbrand>
        <Links to="/dashboard">Book Store Admin</Links>
      </Navbrand>

      <Navcontent>
        <Unoderlist>
          <Listitem>
            <Categorieslink to="/categories">Categories</Categorieslink>
          </Listitem>
          <Listitem>
            <Categorieslink to="/book">Books</Categorieslink>
          </Listitem>
          <Listitem>
            <Buttonlogout
              to="/logout"
              onClick={() => {
                sessionStorage.removeItem("user");
                navigate("/");
              }}
            >
              Logout
            </Buttonlogout>
          </Listitem>
        </Unoderlist>
      </Navcontent>
    </Container>
  );
};

export default Navbar;
