import React, { Component } from 'react';
import face from '../images/face.png';
import insta from '../images/instagram.png';
import twitter from '../images/twitter.png';
import wattpad from '../images/wattpad.png';
import './style/Header.css';

class MiniHeader extends Component {
    render() {
        return (
            <div className="Header mr-auto">
                <div className="Header_imas">
                <a href='https://www.facebook.com/hanna.anaya.96' target="_blank" >
                    {/* Facebook:  */}
                <img src={face} alt=""/>
                </a>
                <a href="https://twitter.com/BlondMasked" target="_blank" >
                    {/* Twitter: */}
                <img src={twitter} alt=""/>
                </a>
                <a href="https://www.instagram.com/maskedblond2/?hl=es-la" target="_blank" >
                   {/* Instagram */}
                   <img src={insta} alt=""/>
                </a>
                <a href="https://www.wattpad.com/user/BlondMasked20" target="_blank" >
                    {/* Wattpad: */}
                    <img src={wattpad} alt=""/>
                </a>  
                </div>
            </div>
        )
    }
};

export default MiniHeader;