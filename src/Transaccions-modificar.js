import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from "./Sidebar";
import './Sidebar.css'


function TransaccionsModificar() {
    return (
        <div className="App row" id="page-wrap">
            <body>
            <Sidebar pageWrap={'page-wrap'} outerContinerId={'outer-container'}/>
            <div id="outer-container">
                <div className="blue-header">
                    <div className="container">
                        <h1 className="title"> Modificar transacció</h1>
                        <a className="text">Selecciona el tipus de finança:</a>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <form className="rs-form-group">
                        <div className="mb-3">
                            <select className="form-select-sm">
                                <option value="Gasto">Gasto</option>
                                <option value="Ingreso">Ingreso</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <div>Suma:</div>
                            <input className="form-control-sm" type="number" name="valor"/>
                        </div>
                        <a href="/Transaccions">
                            <div className="btn btn-primary">Afegir</div>
                        </a>
                    </form>
                </div>

            </div>
            </body>
        </div>
    );
}

export default TransaccionsModificar;
