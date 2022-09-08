import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #d7e5f0;
  height: 100vh;
`;

export const Categoryform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-self: center;
  height: 500px;
`;

export const Form = styled.form`
  background-color: white;
  height: auto;
  border-radius: 5px;

  margin: 10px 0px;
  padding: 30px;
  width: 50%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const Forminputs = styled.div`
  height: auto;
  width: 100%;
`;

export const Spanlogin = styled.span`
  color: red;
  font-size: 16px;
  display: none;
`;

export const Forminputing = styled.input`
  background-color: white;
  padding: 15px;
  margin: 10px 0px;
  width: 90%;
  border: 1px solid #d7e5f0;

  &:invalid ~ ${Spanlogin} {
    display: block;
  }

  border-radius: 5px;
  @media only screen and (max-width: 960) {
    width: 80%;
  }
`;

export const Formbutton = styled.button`
  background-color: #3c3c88;
  padding: 15px;
  margin: 10px 0px;
  width: 95%;
  border: 1px solid #d7e5f0;
  height: 50px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  font-family: sans-serif;
`;

export const Horizontalrule = styled.hr`
  color: #000;
  margin-top: 50px;
`;

export const Registerbutton = styled.button`
  background-color: #000000;
  padding: 15px;
  margin: 10px 0px;
  width: 50%;
  border: 1px solid #d7e5f0;
  height: 50px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  font-family: sans-serif;
  align-self: center;
  cursor: pointer;
`;

export const Categorylist = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-self: center;
  height: 500px;
`;

export const Tablelist = styled.table`
  width: 500px;
  border: thin solid black;
  border-radius: 5px;
`;

export const Tableheade = styled.th`
  padding: 20px;
  width: 80%;
  border: 1px solid black;
`;

export const Tablebody = styled.td`
  padding: 20px;
  width: 80%;
`;
