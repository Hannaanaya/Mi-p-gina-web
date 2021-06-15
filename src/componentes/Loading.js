import React, { Component } from 'react';
import loa from '../images/loading.gif'
import './style/Loading.css';

class Loading extends Component {
    render() {
        return(
            <div className="Loading">
                <img src={loa} width="150px" height="150px"/>
            </div>
        );
    }
}

export default Loading;