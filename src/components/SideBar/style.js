import { Link } from "react-router-dom";
import styled from "styled-components";


export const SideBar = styled.nav`
    position: fixed;
    top: 50px;
    left: ${({open})=>open?"0px":"-300px"};
    height: calc(100vh - 50px);
    padding: 32px 0px;
    background: rgb(49,36,80);
    transition: .35s ease;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10px 2px rgba(0,0,0,0.35);
`;

export const SideBarButton = styled(Link)`
    min-width: 200px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #ffffff;
    padding: 8px 32px;
    border-radius: 6px;
    :hover{
        background-color: #00000030;
        color: #ffffff
    }
    font-family: "Roboto","Helvetica","Arial",sans-serif;
`;