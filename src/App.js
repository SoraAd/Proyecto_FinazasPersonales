import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Component} from "react";
import ProgressBar from "./ProgressBar";
import { Sidenav, Nav } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import SideNav1 from "./SideNav1";
import Transaccions from "./Transaccions";


class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {apiResponse: ""};
    }

    callAPI()
    {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}))
            .catch(err => err);
    }

    componentDidMount()
    {
        this.callAPI();
    }

    render() {
        return (
            <div className="App row">
                <div className="col-2 bckcolor">
                    <SideNav1/>
                </div>
                <div className="col">
                <header className="App-header">
                    <div className="container">
                        <h1>Hola User</h1>
                        <p>Avui és un bon dia per estalviar</p>
                    </div>
                </header>
                <body>
                <div className="container ">
                    <div className="text-center">
                        <div className="row">
                            <div className="col">
                                <div className="card-container">
                                    <div className="card-body">
                                        <span className="material-symbols-outlined"></span>
                                        <h5 className="card-title">Mes</h5>
                                    </div>
                                    <div>
                                        <h6>Presupost: 10.000€</h6>
                                        <h6>Despeses: 3.500€</h6>
                                        <h6>Restant: 6.500€</h6>
                                    </div>
                                    <div>
                                        <Link to="/Mes" className="btn btn-dark no-color-link">Mostrar més</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-container">
                                    <div className="card-body padding-cajas">
                                        <span className="material-symbols-outlined"></span>
                                        <h5 className="card-title">Estalvis</h5>
                                    </div>
                                    <div>
                                        <ProgressBar/>
                                    </div>
                                    <div>
                                        <Link to="/Transaccion" className="btn btn-dark no-color-link">Mostrar més</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin_25px"/>
                        <div className="card-container">
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
                                <div >
                                    <Link to="/Transaccions" className="btn btn-dark no-color-link">Mostrar més</Link>
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
}

export default App;


