import React from 'react';
import {History, Link} from 'react-router';
import store from '../store';
import Scorecard from '../models/scorecard';
import $ from 'jquery';
import BackboneMixin from '../mixins/backbone';
import {Carousel,CarouselItem} from 'react-bootstrap';
import EditHole from '../components/edit-hole';

//need to add cumulative score, fir, gir, total number of putts

const Slider = React.createClass({
  render(){
    return (
      <Carousel>
        <CarouselItem>

        </CarouselItem>
      </Carousel>
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
  handleClick(hole,e){
    console.log(hole)
  },

  render(){
    let scorecard = this.state.scorecard;
    let scorecardId = this.props.params.scorecardId;
    let holes = scorecard && scorecard.holes || [];

    return (

      <div className="hole-list">
        <div className="scorecard-stats">
          <h5>Score: </h5>
          <h5>FIR(%): </h5>
          <h5>GIR(%): </h5>
          <h5># of Putts: </h5>
        </div>
        <Carousel interval={0} className="carousel">

          {holes.map((x)=>
            <CarouselItem>
              <div key={Math.round(Math.random() * 10000)} className="hole-div">
                <Link to={`/scorecards/${scorecardId}/hole/${x.holenumber - 1}`} state={{hole:x}}>Hole: {Number(x.holenumber)}</Link>
              </div>
              </CarouselItem>
          )}

          </Carousel>
        </div>
    )
    }
});

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
