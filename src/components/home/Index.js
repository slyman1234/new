import React from "react";
import {
  Container,
  Section,
  Leftdiv,
  Rightdiv,
  Headtext,
  Pargraghtext,
} from "./index.styled";

import Login from "../login/Login";

const Index = () => {
  return (
    <Container>
      <Section>
        <Leftdiv>
          <Headtext>Book Store</Headtext>
          <Pargraghtext>
            The best and most reliale book mangement store
          </Pargraghtext>
        </Leftdiv>

        <Rightdiv>
          <Login />
        </Rightdiv>
      </Section>
    </Container>
  );
};

export default Index;
