import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  background-color: #3c3c88;
`;

export const Navbrand = styled.div`
  padding: 20px;
  text-align: center;
  background-color: black;
  color: #d7e5f0;
`;

export const Navcontent = styled.div`
  padding: 20px;
  text-align: center;
  color: #d7e5f0;
  border-bottom: #d7e5f0;
`;

export const Unoderlist = styled.ul`
  color: #000000;
  list-style-type: none;
`;

export const Listitem = styled.li`
  color: #000000;
  display: inline;
  margin-left: 10px;
  color: #d7e5f0;
  font-size: 15px;
  font-family: "Courier New", Courier, monospace;
`;

export const Categorieslink = styled(Link)`
  text-decoration: none;
  color: #d7e5f0;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #d7e5f0;
  font-size: 30px;
`;

export const Buttonlogout = styled.button`
  padding: 10px;
  background-color: whitesmoke;
  color: black;
  border-radius: 5px;
  cursor: pointer; ;
`;
