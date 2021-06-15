import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="container">
                 <div className="row text-center">
                <div className="col-12 col-lg">
                    <Link to="/personajes"><p>Personajes</p></Link>
                </div>
                <div className="col-12 col-lg">
                <Link to="/media"><p>Ilustración de personajes</p></Link>
                </div>
                <div className="col-12 col-lg">
                <Link to=""><p>Más</p></Link>
                </div>
                 </div>
               </div>
            </div>
        );
    }
}

export default Footer;