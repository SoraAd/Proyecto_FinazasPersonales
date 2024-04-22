import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";
import {Sidebar} from "rsuite";

function EstalviDetalls() {
    return (
        <html className="App" id="page-wrap">
        <body>
        <Sidebar pageWrap={'page-wrap'} outerContinerId={'outer-container'}/>
        <div id="outer-container" >
            <div className="col">
                <header className="App-header">
                    <div className="container">
                        <h1>Estalvi</h1>
                        <a>Verifica les teves transaccions</a>
                    </div>
                </header>
                <body>
                <div className="container">
                    <div className="card-body">
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
                    </div>
                    <div>
                        <Link to={"/Estalvi"} className={"btn btn-dark"}>Tornar</Link>
                    </div>
                </div>
                </body>
            </div>
        </div>

        </body>


        </html>

    );
}

export default EstalviDetalls;
