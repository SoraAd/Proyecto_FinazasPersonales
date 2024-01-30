import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import ProgressBar from "./ProgressBar";
import SideNav1 from "./SideNav1";

function Estalvi() {
    return (
        <div className="App row">
            <div className="col-2">
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
                <div className="container">
                    <div className="text-center">
                        <div className="row">
                            <div className="col">
                                <div className="card-container">
                                    <div className="card-body">
                                        <span className="material-symbols-outlined"></span>
                                        <h5 className="card-title">Estalvi 1</h5>
                                    </div>
                                    <div>
                                        <a className="margin_25px"></a>
                                        <ProgressBar/>
                                    </div>
                                    <div>
                                        <Link to="/EstalviDetalls" className="btn btn-dark no-color-link">Mostrar més</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-container">
                                    <div className="card-body padding-cajas">
                                        <span className="material-symbols-outlined"></span>
                                        <h5 className="card-title">Estalvi 2</h5>
                                    </div>
                                    <div>
                                        <a className="margin_25px"></a>
                                        <ProgressBar/>
                                    </div>
                                    <div >
                                        <Link to="/EstalviDetalls" className="btn btn-dark no-color-link">Mostrar més</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin_25px"/>
                        <div className="row">
                            <div className="col">
                                <div className="card-container">
                                    <div className="card-body">
                                        <span className="material-symbols-outlined"></span>
                                        <h5 className="card-title">Estalvi 3</h5>
                                    </div>
                                    <div>
                                        <a className="margin_25px"></a>
                                        <ProgressBar/>
                                    </div>
                                    <div>
                                        <Link to="/EstalviDetalls" className="btn btn-dark no-color-link">Mostrar més</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-container">
                                    <div className="card-body">
                                        <span className="material-symbols-outlined"></span>
                                        <h5 className="card-title">Estalvi 4</h5>
                                    </div>
                                    <div>
                                        <a className="margin_25px"/>
                                        <ProgressBar/>
                                    </div>
                                    <div>
                                        <Link to="/EstalviDetalls" className="btn btn-dark no-color-link">Mostrar més</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin_25px"/>
                        <div className="button-container">
                            <Link to="/EstalviDetalls" className="custom-button btn btn-dark no-color-link">Mostrar
                                més</Link>
                        </div>
                    </div>
                </div>
                </body>
            </div>
        </div>


    );
}

export default Estalvi;
