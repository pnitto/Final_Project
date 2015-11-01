import React from 'react';
import {History, Link} from 'react-router';
import store from '../store';
import Scorecard from '../models/scorecard';
import $ from 'jquery';
import BackboneMixin from '../mixins/backbone';
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
      <Carousel className="Carousel" slidesToShow={1} cellSpacing={20} slidesToScroll={1} width="300px" />
    )
}
})

const ScorecardDetail = React.createClass({

  mixins:[History, BackboneMixin],

  getModels(){
    let scorecardId = this.props.params.scorecardId;
    console.log(scorecardId)
    return { scorecard: store.getScorecard(scorecardId) }
  },
  render(){
    let scorecard = this.state.scorecard;
    let scorecardId = this.props.params.scorecardId;
    let holes = scorecard && scorecard.holes || [];
    return (
      <Carousel className="Carousel">
          {holes.map((x)=>
            <div key={Math.round(Math.random() * 10000)}>
                <Link to={`/scorecards/${scorecardId}/hole/${x.holenumber}`} state={{hole:x}}>Hole: {Number(x.holenumber)}</Link>
            </div>
          )}
        </Carousel>
    )
    }
})

export default ScorecardDetail;
/*
$(document).ready(function(){
      $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})
})
*/
