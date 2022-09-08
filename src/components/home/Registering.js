import React from "react";
import Register from "../signup/Register";

import {
  Container,
  Section,
  Leftdiv,
  Rightdiv,
  Headtext,
  Pargraghtext,
} from "./Register.styled";

const Registering = () => {
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
          <Register />
        </Rightdiv>
      </Section>
    </Container>
  );
};

export default Registering;
