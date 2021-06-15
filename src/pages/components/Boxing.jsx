import React from 'react';
import '../style/Boxing.css';

const Boxing = ({children}) => (
    <div className="Boxing">
        <div className="Boxing_container">
        <div className="Boxing__boxing"> 
        { children }
      </div>
        </div>
    </div>
);

export default Boxing;