import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from './components/Box';
import Boxing from './components/Boxing';
import MiniBox from './components/MiniBox';
import './style/Personajes.css';

const Personajes = () => {
    const [ media, setMedia ] =useState({
      mylist: [],
      condena: [],
      nicolas: [],
    });

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
        .then(response => response.json())
        .then(data => setMedia(data));
    }, []);

return (
    <div className="Personajes">
        <Link to="/">
        <button className="btn btn-primary" >
            Regresar a inicio
        </button>
        </Link>

        {media.mylist.length > 0 &&
        <Box title="Mi lista" >
         <Boxing>
            <MiniBox />
         </Boxing>
        </Box>
        }

        <Box title="Condena Sangrienta" >
            <Boxing>
                {media.condena?.map(item =>
                <MiniBox key={item.id} {...item} />
                )}
            </Boxing>
        </Box>

        <Box title="Mi demonio Nicolás" >
            <Boxing>
                {media.nicolas?.map(item =>
                <MiniBox key={item.id} {...item} />
                )}
            </Boxing>
        </Box>
    </div>
    );
}

export default Personajes;