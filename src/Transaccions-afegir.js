import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import SideNav1 from "./SideNav1";


function TransaccionsAfegir() {
    return (
        <div className="App row">
            <div className="col-2">
                <SideNav1/>
            </div>
            <div className="col">
                <header className="App-header">
                    <div className="container">
                        <h1>Afegir transaccio</h1>
                    </div>

                </header>
                <body>
                <div>
                    <form className="rs-form-group">

                        <div>Selecciona el tipo de finanza(?</div>
                        <div className="mb-3">
                            <select>
                                <option value="Gasto">Gasto</option>
                                <option value="Ingreso">Ingreso</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Mount:
                            </label>
                            <input className="form-control" type="text" name="valor"/>

                        </div>

                        <div className="btn btn-primary">Afegir</div>


                    </form>

                </div>
                </body>
            </div>


        </div>
    );
}

export default TransaccionsAfegir;
