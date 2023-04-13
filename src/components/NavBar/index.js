import * as C from "./style"
import useAuth from "../../hooks/useAuth";
import montdlogo from "../../assets/imgs/montd.logo.png";
import Button from "../Button";
import { useState } from "react";
import SideBar from "../SideBar";



const Navbar = () => {
    const { signout } = useAuth();
    const [open, setOpen] = useState (false);
    return (
        <>
        <SideBar open={open} setOpen={setOpen} />
            <C.Barra>
                <C.Hamburguer open={open} onClick={()=>setOpen(!open)} >
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </C.Hamburguer>
                <C.Logo>
                    <img src={montdlogo} alt="" height="100%" />
                </C.Logo>
                <Button Text="Logout" onClick={signout} />
            </C.Barra>
        </>
    )
}
export default Navbar