import styled, { css } from "styled-components";

export const Barra = styled.div`
  background-color: rgb(49, 36, 80);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:0px 32px;
  box-shadow: 5px 5px 10px 2px rgba(0,0,0,0.35);
`;
export const Logo = styled.div`
  height: 50px;
`;

export const Hamburguer = styled.div`
  width: 30px;
  height: 23.5px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
  display: block;
  position: absolute;
  height: 4.5px;
  width: 100%;
  background: #ffffff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}
    span:nth-child(1) {
    top: 0px;
    }

    span:nth-child(2), span:nth-child(3) {
    top: 9px;
    }

    span:nth-child(4) {
    top: 18px;
    }

    ${({open})=>open&& css`
    span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
    }

    span:nth-child(2) {
    transform: rotate(45deg);
    }

    span:nth-child(3) {
    transform: rotate(-45deg);
    }

    span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
    }
    `}

`;

