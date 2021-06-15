import React from 'react';
import Carrusel from '../componentes/Carrusel';
import Galery from '../componentes/Galery';
import Footer from '../componentes/Footer';
import Loading from '../componentes/Loading';
import api from '../api';
import './style/Principal.css';

class Principal extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }
    
    componentDidMount() {
        this.fetchData()
    }
    
    fetchData = async () => {
        this.setState({ loading: true, error: null });
    
    try {
        const data = await api.badges.list();
        this.setState({ loading: false, data: data });
    } catch (error) {
        this.setState({ loading: false, error: error });
        }
    };
    
    render() {
        if(this.state.loading === true) {
            return <Loading />;
        }
        return(
            <div className="contenido">
                 <h2 className="col-sm-4 text-center">Mis historias</h2>
                 <Carrusel
                 title = "Condena Sangrienta"
                 danger = "de abuso sexual, violencia gráfica y lenguaje inapropiado"
                 categ = "+16"
                 genero = "Fantasía"
                 sinopsis = "Trae maldiciones a donde sus pies tocan la tierra.
                 La carga que se le ha otorgado no podrá dejarla incluso con su muerte, tiene una misión que deberá cumplir.
                 En ese mundo de misterio, magia perdida en el tiempo y fantásticos individuos,
                 solo unos excepcionales humanos podrán salvarlo, claro que, con el riesgo de perder la vida en el camino.
                 ¿Qué tan lejos estarán dispuestos a llegar por él?"

                 title1 = "Corazón esclavisado"
                 danger1 = "abuso sexual"
                 categ1 = "+16"
                 genero1 = "BL"
                 sinopsis1 = "Una comandante de grandes ideales dirige el ejército del reino Mery. Cuando se
                 enamora de la esclava favorita del clan Shion, una de las familias más poderosas que predomina el estado, Amaya está dispuesta a
                 luchar por liberarla, aunque eso signifique traicionar a su país."

                 title2 = "Mis poemas"
                 categ2 = "Todo público"
                 genero2 = "Poesía"
                 sinopsis2 = "La definición de las emociones es diferente para todos."

                 title3 = "Mi demonio Nicolás"
                 danger3 = "de abuso sexual, violencia gráfica y lenguaje inapropiado"
                 categ3 = "+18"
                 genero3 = "BL/Suspenso-Terror"
                 sinopsis3 = "Los hermanos Beryclooth.
                 Su historia comenzó el día que fueron separados. A Arthur, su propia sangre le cortó sus alas; Nicolás conoció la verdadera
                 oscuridad habitable en su alma, olvidándose del cielo para adentrarse en el infierno, renaciendo como un hombre malvado y sin miedo a nada.
                 En el bajo mundo, él es conocido como 'El demonio'."
                 />

                <h2>Galería</h2>
                <Galery />
                <br/>
                <div>
                <Footer />
                </div>
                
            </div>
        );
    }
}

export default Principal;