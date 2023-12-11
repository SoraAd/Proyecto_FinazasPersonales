import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Funcionalitats from './Transaccions';

import Mes from "./Mes";
import Ajuda from "./Estalvi";
import Transaccions from "./Transaccions";
import Estalvi from "./Estalvi";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Transaccions" element={<Transaccions />} />
                <Route path="/Mes" element={<Mes/>}/>
                <Route path="/Estalvi" element={<Estalvi/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
);

reportWebVitals();
