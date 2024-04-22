import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import ProgressBar from "./ProgressBar";
import Sidebar from "./Sidebar"

function Estalvi() {
    return (
        <html className="App" id="page-wrap">
        <body>
        <Sidebar pageWrap={'page-wrap'} outerContinerId={'outer-container'}/>
        <div id="outer-container">
            <div className="blue-header">
                <div className="container">
                    <h1 className="title">Estalivs</h1>
                    <p className="text">Avui és un bon dia per estalviar</p>
                    <hr/>
                </div>
            </div>
            <div className="container">
                <div className="text-center">
                    <div className="row py-3">
                        <div className="col">
                            <div className="card-container-mes">
                                <div className="card-body">
                                    <span className="material-symbols-outlined"></span>
                                    <h5 className="card-title">Estalvi 1</h5>
                                </div>
                                <div>
                                    <ProgressBar/>
                                </div>
                                <div>
                                    <Link to="/EstalviDetalls" className="btn btn-border btn-light">Mostrar
                                        més</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-container-mes">
                                <div className="card-body padding-cajas">
                                    <span className="material-symbols-outlined"></span>
                                    <h5 className="card-title">Estalvi 2</h5>
                                </div>
                                <div>
                                    <ProgressBar/>
                                </div>
                                <div>
                                    <Link to="/EstalviDetalls" className="btn btn-border btn-light">Mostrar
                                        més</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card-container-mes">
                                <div className="card-body">
                                    <span className="material-symbols-outlined"></span>
                                    <h5 className="card-title">Estalvi 3</h5>
                                </div>
                                <div>
                                    <ProgressBar/>
                                </div>
                                <div>
                                    <Link to="/EstalviDetalls" className="btn btn-border btn-light">Mostrar
                                        més</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-container-mes">
                                <div className="card-body">
                                    <span className="material-symbols-outlined"></span>
                                    <h5 className="card-title">Estalvi 4</h5>
                                </div>
                                <div>
                                    <ProgressBar/>
                                </div>
                                <div>
                                    <Link to="/EstalviDetalls" className="btn btn-border btn-light no-color-link">Mostrar
                                        més</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"py-3"}>
                        <Link to="/EstalviDetalls" className="btn btn-border btn-light">Mostrar
                            més</Link>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>


    );
}

export default Estalvi;
