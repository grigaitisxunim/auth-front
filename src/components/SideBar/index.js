import * as C from "./style"


const SideBar = ({ open, setOpen }) => {

    return (
        <>
            <C.SideBar open={open}>
                <C.SideBarButton to={"/home"} onClick={() => setOpen(false)}>Home</C.SideBarButton>
                <C.SideBarButton to={"/chamados"} onClick={() => setOpen(false)}>Chamados</C.SideBarButton>
                <C.SideBarButton to={"/alertas"} onClick={() => setOpen(false)}>Alertas</C.SideBarButton>
            </C.SideBar>
        </>
    )
}

export default SideBar