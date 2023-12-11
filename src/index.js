import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Mes from "./Mes";
import Transaccions from "./Transaccions";
import Estalvi from "./Estalvi";
import EstalviDetalls from "./Estalvi-detalls";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Transaccions" element={<Transaccions />} />
                <Route path="/Mes" element={<Mes/>}/>
                <Route path="/Estalvi" element={<Estalvi/>}/>
                <Route path="/EstalviDetalls" element={<EstalviDetalls/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
);

reportWebVitals();
