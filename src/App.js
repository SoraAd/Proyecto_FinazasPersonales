import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h1>Hello User</h1>
                    <p>Avui és un bon dia per estalviar</p>
                </div>
            </header>
            <body>
            <div className="container">
                <div className="text-center">
                    <div className="row">
                        <div className="col">
                            <div className="cajas">
                                <div className="card-body">
                                    <span className="material-symbols-outlined"></span>
                                    <h5 className="card-title">Mes</h5>
                                </div>
                                <div >
                                    <p>Presupost: presupost</p>
                                    <p>Despeses: despeses </p>
                                    <p>Restant: restant</p>
                                </div>
                                <div className="btn btn-dark">
                                    <Link to="/Mes" className="no-color-link">Mostra més</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cajas">
                                <div className="card-body padding-cajas" >
                                    <span className="material-symbols-outlined"></span>
                                    <h5 className="card-title">Estalvis</h5>
                                </div>
                                <div>
                                    Barra de progreso<br></br>
                                    2.500€ / 5000€
                                </div>
                                <div className="btn btn-dark">
                                    <Link to="/Estalvi" className="no-color-link">Mostra més</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="margin_75px"/>
                    <div className="cajas">
                        <div className="card-body">
                            <h5 className="card-title">Últimes transaccions</h5>
                            <table className="table">
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
                            <div className="btn btn-dark">
                                <Link to="/Transaccions" className="no-color-link">Mostra més</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div><Link to="/prueba" className="big-btn col btn btn-primary btn-lg btn-block" >Prueba</Link></div>*/}
            </div>
            </body>
        </div>

    );
}

export default App;


