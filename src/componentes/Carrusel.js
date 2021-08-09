import React, { Component } from 'react';
import L1 from '../images/libros/libro (1).jpg';
import L2 from '../images/libros/libro (2).jpg';
import L3 from '../images/libros/libro (3).jpg';
import L4 from '../images/libros/libro.jfif';
import Image from './Images';
import './style/Carrusel.css';

class Carrusel extends Component {
render() {
        return (
          <div className="Books mt-4 mb-2">
            <div className="Books_container">
            <div className="row aling-items-center" >
            <div className="Book">
            <div className="col-sm-auto col-md col-lg">
            <div className="project mt-5 ml-4 mr-2">
            <h3 className="title"> {this.props.title} </h3>
              <h6><strong>ADVERTENCIA</strong> {this.props.danger} </h6>
              <p><strong>Categoría: </strong>{this.props.categ} </p>
              <p><strong>Género: </strong>{this.props.genero} </p>
              <p><strong>Sinopsis: </strong>{this.props.sinopsis} </p>
            </div>
            </div>
            
          <div id="image" className="col-sm-auto">
          <Image className="img-fluid mt-5 ml-4 mr-3" src={L1} alt="First slide" />
          </div>

           <div className="col-sm-12 col-md col-lg">
                <div className="project mt-5 ml-4 mr-2">
                  <h3 className="title">{this.props.title1} </h3>
                  <h6><strong>ADVERTENCIA</strong> {this.props.danger1} </h6>
                  <p><strong>Categoría: </strong>{this.props.categ}</p>
                  <p><strong>Género: </strong>{this.props.genero1} </p>
                  <p><strong>Sinopsis: </strong>{this.props.sinopsis1} </p>
                </div>
          </div>
          <div id="image" className="col-sm-auto ">
          <Image className="img-fluid mt-5 ml-4 mr-3" src={L2} alt="Second slide" />
          </div>

          <div className="col-sm-12 col-md col-lg">
              <div className="col-sm-6 col-md-12 col-lg">
                <div className="project mt-5 ml-4 mr-2">
                  <h3 className="title">{this.props.title2} </h3>
                  <p><strong>Categoría: </strong>{this.props.categ2} </p>
                  <p><strong>Género: </strong>{this.props.genero2} </p>
                  <p><strong>Sinopsis: </strong>{this.props.sinopsis2} </p>
                </div>
          </div>
          </div>
          <div id="image" className="col-sm-auto ">
          <Image className="img-fluid mt-5 ml-4 mr-3" src={L3} width="300" height="390" alt="Third slide" />
          </div>

          <div className="col-sm-12 col-md col-lg">
            <div className="project mt-5 ml-4 mr-2">
              <h3 className="title">{this.props.title3} </h3>
              <h6><strong>ADVERTENCIA</strong>{this.props.danger3} </h6>
              <p><strong>Categoría: </strong>{this.props.categ3} </p>
              <p><strong>Género:</strong>{this.props.genero3} </p>
              <p><strong>Sinopsis</strong>{this.props.sinopsis3} 
              </p>
            </div>
          </div>
          <div id="image" className="col-sm-auto ">
          <Image className="img-fluid mt-5 ml-4 mr-3" src={L4} width="300" height="390" alt="First slide" />
          </div>

          </div>
          </div>
        </div>
          </div>
        );
    }
}

export default Carrusel;