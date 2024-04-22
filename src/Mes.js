import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

function Mes() {
    return (
        <html className="App" id="page-wrap">
        <body>
        <Sidebar pageWrap={'page-wrap'} outerContinerId={'outer-container'}/>
        <div id="outer-container">
            <div className="blue-header ">
                <div className="container">
                    <h1 className="title">Març</h1>
                    <p className="text">Avui és un bon dia per estalviar</p>
                    <hr/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card-container-mes padding1">
                            <div className="card-body">
                                <span className="material-symbols-outlined"></span>
                            </div>
                            <div className="h4">
                                <p>Ingressos Fixes: 1.500€</p>
                                <p>Ingressos Variables: 400€</p>
                                <p>Presupost Total: XXXXX€</p>
                                <p>Despeses Fixes: 1200€</p>
                                <p>Despeses Variables: 300€</p>
                                <p>Presupost Actual: XXXXX€</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin_25px"/>
                <div className="card-container ">
                    <div className="text-center">
                        <div className="card-body">
                            <h5 className="card-title">Últimes transaccions</h5>
                            <table className="table table-striped">
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Bizum</td>
                                    <td><span className="ingres">Ingrés</span></td>
                                    <td>21/10/2023</td>
                                    <td>99€</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Bizum</td>
                                    <td><span className="despesa">Despesa</span></td>
                                    <td>21/10/2023</td>
                                    <td>-100€</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Bizum</td>
                                    <td><span className="ingres">Ingrés</span></td>
                                    <td>21/10/2023</td>
                                    <td>90€</td>
                                </tr>
                                </tbody>

                            </table>
                            <div>
                                <Link to="/Transaccions" className="btn btn-border btn-light">Mostra
                                    més</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

export default Mes;
