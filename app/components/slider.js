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
              <h1>Pure CSS Star Rating Widget</h1>
                      <fieldset className="rating">
                        <input type="radio" id="star5" name="rating" defaultValue={5} /><label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                        <input type="radio" id="star4half" name="rating" defaultValue="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars" />
                        <input type="radio" id="star4" name="rating" defaultValue={4} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
                        <input type="radio" id="star3half" name="rating" defaultValue="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
                        <input type="radio" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
                        <input type="radio" id="star2half" name="rating" defaultValue="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars" />
                        <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
                        <input type="radio" id="star1half" name="rating" defaultValue="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
                        <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
                        <input type="radio" id="starhalf" name="rating" defaultValue="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars" />
                      </fieldset>

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
