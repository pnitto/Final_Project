import React from 'react';
import $ from 'jquery';
import {History} from 'react-router';
//var Carousel = require('nuka-carousel');
import Carousel from 'nuka-carousel';

const Slider = React.createClass({
  propTypes: {
    slidesToShow : React.PropTypes.number,
    cellSpacing: React.PropTypes.number,
    slidesToScroll: React.PropTypes.number,
    width: React.PropTypes.string
  },
  mixins: [History, Carousel.ControllerMixin],

  render(){
    return (
      <Carousel className="Carousel" slidesToShow={1} cellSpacing={20} slidesToScroll={1} width="300px">
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
      </Carousel>
    )
}
})
export default Slider;
