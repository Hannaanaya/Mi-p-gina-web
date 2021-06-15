import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import './style/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header navbar navbar-expand-lg navbar-light">
                <img src={logo} alt=""/>
                <h1 className="md" >Conoce a BlondMasked... </h1>

                <div className="Header_buscar">
                    <input type="text" placeholder="Busca una historia..." />
                    <button className="btn btn-primary text-center" >Buscar</button>
                </div>
            </div>
        )
    }
};

export default Header;