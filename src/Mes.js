import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import SideNav1 from "./SideNav1";

function Mes() {
    return (
        <div className="App row">
            <div className="col-2">
                <SideNav1/>
            </div>
            <div className="col">
                <header className="App-header">
                    <div className="container">
                        <h1>Desembre</h1>
                        <a>Verifica els teus moviments</a>
                    </div>

                </header>
                <body>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card-container padding1">
                                <div className="card-body">
                                    <span className="material-symbols-outlined"></span>
                                </div>
                                <div className="h4">
                                    <p>Ingressos Fixes: XXXXX€</p>
                                    <p>Ingressos Variables: XXXXX€</p>
                                    <p>Presupost Total: XXXXX€</p>
                                    <p>Despeses Fixes: XXXXX€</p>
                                    <p>Despeses Variables: XXXXX€</p>
                                    <p>Presupost Actual: XXXXX€</p>
                                </div>
                                <div>
                                    <image></image>

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
                                        <td>21/10/2023</td>
                                        <td>99</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bizum</td>
                                        <td>21/10/2023</td>
                                        <td>-100€</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Bizum</td>
                                        <td>21/10/2023</td>
                                        <td>90€</td>
                                    </tr>
                                    </tbody>

                                </table>
                                <div>
                                    <Link to="/Transaccions" className="btn btn-dark no-color-link">Mostra més</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </body>
            </div>
        </div>
    );
}

export default Mes;
