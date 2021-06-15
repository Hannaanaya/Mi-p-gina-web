import React from 'react';
import '../style/Box.css';

const Box = ({ title, children }) => (
    <div className="Box">
        <h2 className="Box__title">{title}</h2>
    {children}
    </div>
);

export default Box;