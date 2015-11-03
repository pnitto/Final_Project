import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link, History} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import {Carousel, CarouselItem} from 'react-bootstrap';
import HoleList from '../components/scorecard-detail';
import scorecard from '../models/scorecard';


const carouselInstance = React.createClass({

      render(){
        return (
          <div>
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>

        <Carousel>
          <CarouselItem>
            <img src="app/images/golf.jpg" />
            <div className="carousel-caption">
              <h3><Link to="/">Home</Link></h3>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-caption">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-caption">
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </CarouselItem>
        </Carousel>
        </div>
      )
  }
});



export default carouselInstance;
