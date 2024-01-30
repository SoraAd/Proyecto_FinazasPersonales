import {Nav, Sidenav} from "rsuite";
import {Link, NavLink} from "react-router-dom";


function SideNav1() {


    const sideNavStyled = {
        backgroundColor: "#D9D9D9",
        height: "97vh"
    };


    const buttonStyled = {
        backgroundColor: "#D9D9D9",
    }


    return (
        <div >
            <Sidenav style={sideNavStyled} appearance="default">
                <Sidenav.Body>
                    <Nav>
                        <div onClick={() => window.location.href = "/"} className="no-color-link-black">
                            <Nav.Item eventKey="1" style={buttonStyled}>
                                Inicio
                            </Nav.Item>
                        </div>
                        <div onClick={() => window.location.href = "/Mes"} className="no-color-link-black">
                            <Nav.Item eventKey="2" style={buttonStyled}>
                                Prueba
                            </Nav.Item>
                        </div>
                        <div onClick={() => window.location.href = "/Estalvi"} className="no-color-link-black">
                            <Nav.Item eventKey="3" style={buttonStyled}>
                                Estalvis
                            </Nav.Item>
                        </div>
                        <div onClick={() => window.location.href = "/Transaccions"} className="no-color-link-black">
                            <Nav.Item eventKey="4" style={buttonStyled}>
                                Transaccions
                            </Nav.Item>
                        </div>
                        <div onClick={() => window.location.href = "/Configuracio"} className="no-color-link-black">
                            <Nav.Item eventKey="5" style={buttonStyled}>
                                Configuració (No funciona)
                            </Nav.Item>
                        </div>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>


        </div>
    )
}

export default SideNav1;
