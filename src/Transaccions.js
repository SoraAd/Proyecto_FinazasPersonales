import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import SideNav1 from "./SideNav1";
import {Button} from "rsuite";
import React from "react";
import logo from "./backup/logo.svg";


function Transaccions() {

    const [data, setData] = React.useState({"movimientos":[{"id":1,"cantidad":700,"categoria":"9","fecha":"3/11/2023","descripcion":"November's rent","tipo":"g"}]});

    React.useEffect(() => {
        fetch("/api/movimientos/")
            .then((res) => res.json())
            .then((data) => setData(data));
        console.log(data.movimientos[0].id)
    }, []);

    const movimientosElements = data.movimientos.map((movimiento, i) => (
        <tr>
            <th scope="row">{movimiento.id}</th>
            <td>{movimiento.tipo}</td>
            <td>{movimiento.fecha}</td>
            <td>{movimiento.cantidad}</td>
            <td><Link to="/Transaccio-modificar" className="btn btn-warning">Modificar</Link>
                <div className="btn btn-danger">Eliminar</div>
            </td>
        </tr>))

    return (
        <div className="App row">
            <div className="col-2">
                <SideNav1/>
            </div>
            <div className="col">
                <header className="App-header">
                    <div className="container">
                        <h1>Transaccions</h1>
                        <a>Verifica les teves transaccions</a>
                        <Link to="/Transaccions-afegir" className="btn btn-primary">Afegir</Link>
                    </div>
                </header>
                <body>
                <div className="container">
                    <div className="card-body">
                        <table className="table table-striped">
                            <tbody className="table-striped">
                            {movimientosElements}
                            </tbody>
                        </table>

                    </div>
                </div>
                </body>
            </div>
        </div>
    );

}

export default Transaccions;
