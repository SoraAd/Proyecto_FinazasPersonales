import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

function Transaccions(){
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                <h1>Transaccions</h1>
                    <a>Verifica les teves transaccions</a>
                </div>
            </header>
            <body>
                <div className="container">
                        <div className="card-body">
                            <table className="table table-striped">
                                <tbody className="table-striped">
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
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>99</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>-100€</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>90€</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>99</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>-100€</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>90€</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>99</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>-100€</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>Bizum</td>
                                    <td>21/10/2023</td>
                                    <td>90€</td>
                                </tr>
                                </tbody>
                            </table>
                            <div>
                                <Link to={"/"} className={"btn btn-dark"}>Tornar</Link>
                            </div>
                        </div>
                    </div>
            </body>
        </div>
    );

}

export default Transaccions;
