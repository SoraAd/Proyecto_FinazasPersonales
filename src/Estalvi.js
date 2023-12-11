import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

function Estalvi(){
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h1>Estalvi</h1>
                </div>
            </header>
            <body>
            <div className="container">
                <div className="row margin-buttons">
                    <Link to={"/"} className={"btn btn-secondary btn-lg"}>Tornar</Link>
                </div>

            </div>
            </body>
        </div>
    );
}

export default Estalvi;
