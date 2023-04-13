import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(248, 248, 255);
  padding: 150px 0px;
  height: 100%;
`;

export const Title = styled.h2``;

export const Logout = styled(Link)`
  position: relative;
  top: 10px;
  left: 0;
  margin-right: 20px;
  height: 50px;
  text-align: right;
  color: white;
  font-weight: 300;
  font-size: 16px;
  text-decoration: none;
`;
export const Div = styled.div`
  margin-top: 30px;
  background-color: #ffff;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.35);
`;
