import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Component} from "react";
import ProgressBar from "./ProgressBar";
import "rsuite/dist/rsuite.min.css";
import Sidebar from "./Sidebar";

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
            <html className="App" id="page-wrap">
            <body>
            <Sidebar pageWrap={'page-wrap'} outerContinerId={'outer-container'}/>
            <div id="outer-container">
                <div className="blue-header ">
                    <div className="container">
                        <h1 className="title">Inici</h1>
                        <p className="text">Avui és un bon dia per estalviar</p>
                        <hr/>
                    </div>
                </div>
                <div className="col container">
                    <div className="text-center">
                        <div className="row py-1">
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mes</h5>
                                        <h6>Presupost: 10.000€</h6>
                                        <h6>Despeses: 3.500€</h6>
                                        <h6>Restant: 6.500€</h6>
                                        <p className={"py-1"}></p>
                                        <Link to="/Mes" className="btn btn-border btn-light no-color-link">Mostrar més</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Estalvis</h5>
                                        <ProgressBar/>
                                        <Link to="/Estalvi" className="btn btn-border btn-light no-color-link">Mostrar
                                            més</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin_25px"></div>
                        <div className="card-container">
                            <div className="card-body">
                                <h5 className="card-title">Últimes transaccions</h5>
                                <table className="table table-striped"></table>
                                <div>
                                    <Link to="/Transaccions" className="btn btn-light no-color-link">Mostrar més</Link>
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
}

export default App;


