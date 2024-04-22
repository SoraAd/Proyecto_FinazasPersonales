import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from "./Sidebar";

function Configuracio(){
    return (
        <div className="App" id="outer-container">
            <Sidebar pageWrap={'page-wrap'} outerContinerId={'outer-container'}/>
            <div id="page-wrap">
                <div className="col">
                    <header className="App-header">
                        <div className="container">
                            <h1>Configuració</h1>
                        </div>
                    </header>
                    <body>
                    <div className="container">
                        <div className="text-center">
                            <div className="row">

                            </div>
                            <div className="margin_25px"/>
                            <div className="row">

                            </div>
                            <div className="margin_25px"/>
                            <div className="button-container">

                            </div>
                        </div>
                    </div>
                    </body>
                </div>
            </div>
        </div>


    );
}

export default Configuracio;
