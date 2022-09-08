import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
`;

export const Section = styled.div`
  display: flex;

  align-items: center;
  justify-items: center;
  align-content: center;
  align-self: center;
  justify-content: space-between;
  padding: 30px;
  height: 100vh;
  background-color: #d7e5f0;
  box-sizing: border-box;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Leftdiv = styled.div`
  width: 50%;
  height: 100px;
  /* background-color: black; */
  color: white;
  align-content: center;
  align-items: center;
  text-align: left;
  padding-left: 50px;
  margin-top: -150px;
  @media only screen and (max-width: 960px) {
    flex-direction: column;

    margin-top: 20px;
    width: 100%;
    height: 60%;
  }
`;

export const Rightdiv = styled.div`
  width: 60%;
  height: 100px;
  color: white;
  margin-top: -150px;
  padding: 20px;
  align-self: center;
  @media only screen and (max-width: 960px) {
    flex-direction: column;

    width: 100%;
    height: 60%;
  }
`;

export const Headtext = styled.h1`
  color: #3c3c88;
  font-size: 50px;
  font-family: roboto;
`;

export const Pargraghtext = styled.p`
  color: #000000;
  font-size: 26px;
  font-family: roboto;
  margin-top: -20px;
`;
