import React from 'react';
import {History, Link} from 'react-router';
import store from '../store';
import Scorecard from '../models/scorecard';
import $ from 'jquery';


const ScorecardDetail = React.createClass({
  mixins:[History],
  getInitialState(){
    return {
      scorecard: (this.props.location.state.scorecard) || { holes:[] }
    }
  },
  componentWillMount(){
    if(!this.state.scorecard) {
      let scorecardId = this.props.params.id;
      let scorecard = new Scorecard({ objectId: scorecardId })
      scorecard.fetch().then(() => this.setState({ scorecard : scorecard }))
    }
  },
  render(){
    let scorecard = this.state.scorecard;
    console.log(scorecard.holes)
    return (
      <div>
        <ul>
          {scorecard.holes.map((x)=>
            <li key={Math.round(Math.random() * 10000)}>
                <Link to={`/hole/${x.holenumber}`} state={{hole:x}}>Hole: {Number(x.holenumber)}</Link>
            </li>
          )}
        </ul>
      </div>
    )
    }
})
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
export default ScorecardDetail;
