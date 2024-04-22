import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Inici
            </a>
            <a className="menu-item" href="/Mes">
                Mes actual
            </a>
            <a className="menu-item" href="/Estalvi">
                Estalvi
            </a>
            <a className="menu-item" href="/Transaccions">
                Transaccions
            </a>
            <a className="menu-item" href="/Configuracio">
                Configuració
            </a>
        </Menu>
    );
};
