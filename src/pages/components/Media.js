import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../../componentes/Loading';
import Image from '../../componentes/Images';
import img1 from '../../images/media/pers/man/A (1).png';
import img2 from '../../images/media/pers/man/A (3).jpg';
import img3 from '../../images/media/pers/man/A (4).jpg';
import img4 from '../../images/media/pers/man/A (9).jpg';

import img5 from '../../images/media/pers/man/A (1).jpg';
import img6 from '../../images/media/pers/man/A (5).jpg';
import img7 from '../../images/media/pers/man/A (6).jpg';
import img8 from '../../images/media/pers/man/A (7).jpg';
import img9 from '../../images/media/pers/man/A (10).jpg';
import img10 from '../../images/media/pers/man/A (11).jpg';

import img11 from '../../images/media/pers/woman/F (1).jpeg';
import img12 from '../../images/media/pers/woman/F (2).jpg';
import img13 from '../../images/media/pers/woman/F (3).jpeg';
import img14 from '../../images/media/pers/woman/F (3).jpg';
import img15 from '../../images/media/pers/woman/F (4).jpeg';
import img16 from '../../images/media/pers/woman/F (4).jpg';

import img17 from '../../images/media/pers/woman/y (1).jpeg';
import img18 from '../../images/media/pers/woman/y (1).jpg';
import img19 from '../../images/media/pers/woman/y (2).jpeg';
import img20 from '../../images/media/pers/woman/y (3).jpeg';
import img21 from '../../images/media/pers/woman/y (4).jpeg';

import api from '../../api';
import '../style/Media.css';

class Media extends Component {
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
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({loading: false, data: error })
        }
    };

    render() {
        if (this.state.loading === true) {
            return <Loading />
        }
        if (this.state.error) {
            return `Error`
        }

        return (
            <div className="Media">
                <Link to="/inicio">
                 <button className="btn btn-primary" >
                    Regresar a inicio
                 </button>
                </Link>
                <div className="Media_container mt-5">
                    <h2>Exon Worsley</h2>
                <Image className="mt-2 mb-2" src={img1} />
                <Image className="mt-2 mb-2 " src={img2} />
                <Image className="mt-2 mb-2" src={img3} />
                <Image className="mt-2 mb-2" src={img4} />
                </div>

                <div className="Media_container mt-5">
                <h2>André Worsley</h2>
                <Image className="mt-2 mb-2" src={img5} />
                <Image className="mt-2 mb-2" src={img6} />
                <Image className="mt-2 mb-2" src={img7} />
                <Image className="mt-2 mb-2" src={img8} />
                <Image className="mt-2 mb-2" src={img9} />
                <Image className="mt-2 mb-2" src={img10} />
                </div>

                <div className="Media_container mt-5">
                <h2>Fiona Amaris</h2>
                <Image className="mt-2 mb-2" src={img11} />
                <Image className="mt-2 mb-2" src={img12} />
                <Image className="mt-2 mb-2" src={img13} />
                <Image className="mt-2 mb-2" src={img14} />
                <Image className="mt-2 mb-2" src={img15} />
                <Image className="mt-2 mb-2" src={img16} />
                </div>

                <div className="Media_container mt-5">
                <h2>Yane Howard</h2>
                <Image className="mt-2 mb-2" src={img17} />
                <Image className="mt-2 mb-2" src={img18} />
                <Image className="mt-2 mb-2" src={img19} />
                <Image className="mt-2 mb-2" src={img20} />
                <Image className="mt-2 mb-2" src={img21} />
                </div>
            </div>
        );
    }
}

export default Media;