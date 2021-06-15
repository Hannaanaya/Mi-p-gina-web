import React, { Component } from 'react';
import Image from './Images';
import Loading  from './Loading';
import img1 from '../images/media/bosque (1).jpg';
import img2 from '../images/media/bosque (2).jpg';
import img3 from '../images/media/bosque (3).jpg';
import img4 from '../images/media/bosque (4).jpg';
import img5 from '../images/media/azul.jpg';
import img6 from '../images/media/cueva.jpg';
import img7 from '../images/media/rio.jpg';
import img8 from '../images/media/verde.jpg';
import api from '../api';
import './style/Galery.css';

class Galery extends Component {
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
        return (
            <div className="Galery">
                <div className="Galery_container">
                <Image className="mt-2 mb-2" src={img1} />
                <Image className="mt-2 mb-2 " src={img2} />
                <Image className="mt-2 mb-2" src={img3} />
                <Image className="mt-2 mb-2" src={img4} />
                <Image className="mt-2 mb-2" src={img5} />
                <Image className="mt-2 mb-2" src={img6} />
                <Image className="mt-2 mb-2" src={img7} />
                <Image className="mt-2 mb-2" src={img8} />
                </div>
            </div>
        );
    }
}

export default Galery;