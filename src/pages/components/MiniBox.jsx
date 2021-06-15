import React from 'react';
import '../style/MiniBox.css';

const MiniBox = ({ cover, name, lastname, old, raza, title}) => (
    <div className="MiniBox-item">
    <div className="MiniBox-item__section">
        <img  className="MiniBox-item_photo" src={cover} alt="Foto"/>
    </div>
    <div className="MiniBox-item_info">
        <ul className="list-unstyled">
             <li>
                <p><strong>Nombre: </strong>{name}</p>
            </li>
            <li>
                <p><strong>Apellido: </strong>{lastname}</p>
            </li>
                    
            <li>
                <p><strong>Edad: </strong> {old}</p>
            </li>
            <li>
                <p><strong>Raza: </strong> {raza}</p>
            </li>
        </ul>
    </div>
    <div className="MiniBox-item__footer">#{title}
    {/* <img src={heart} width="90px"/> */}
    </div>
    </div>
);

export default MiniBox;