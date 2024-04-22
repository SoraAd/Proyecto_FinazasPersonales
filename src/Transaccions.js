import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

import Sidebar from "./Sidebar";
import {Button} from "rsuite";
import React from "react";
import logo from "./backup/logo.svg";


function Transaccions() {

    const template = {
        "movimientos": [{
            "id": null,
            "cantidad": null,
            "categoria": null,
            "fecha": null,
            "descripcion": null,
            "tipo": null
        }]
    };
    const [data, setData] = React.useState(template);
//
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
            <td>
                <Link to="/Transaccions-afegir" className="btn btn-primary">Afegir</Link>
                <Link to="/Transaccions-modificar" className="btn btn-warning">Modificar</Link>
                <div className="btn btn-danger">Eliminar</div>
            </td>
        </tr>))

    return (
        <html className="App row" id="page-wrap">
        <body>
        <Sidebar pageWrap={'page-wrap'} outerContinerId={'outer-container'}/>
        <div id="outer-container">
            <div className="blue-header">
                <div className="container">
                    <h1 className="title">Transaccions</h1>
                    <a className="text">Verifica les teves transaccions</a>
                    <hr/>
                </div>
            </div>

        </div>
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
        </html>
    )
        ;

}

export default Transaccions;
