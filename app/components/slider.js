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
      )
  }
});



export default carouselInstance;
