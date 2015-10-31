import React from 'react';
import $ from 'jquery';
import {Link, History} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import Carousel from 'nuka-carousel';
import HoleList from '../components/scorecard-detail';
import scorecard from '../models/scorecard';



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
        
      </Carousel>
    )
}
})
export default Slider;
