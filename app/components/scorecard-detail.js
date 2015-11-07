import React from 'react';
import {History, Link} from 'react-router';
import store from '../store';
import {Scorecard} from '../models/scorecard';
import $ from 'jquery';
import BackboneMixin from '../mixins/backbone';
import {Carousel,CarouselItem,Button, Input,Table} from 'react-bootstrap';
import EditHole from '../components/edit-hole';

//need to re render the screen after hole information is put in

const ScorecardDetail = React.createClass({

  mixins:[History, BackboneMixin],

  getModels(){
    let scorecardId = this.props.params.scorecardId;
    console.log("Scorecard Id: " + scorecardId)
    return {scorecard: store.getScorecard(scorecardId)}
  },

  render(){

    let scorecard = this.state.scorecard;
    console.log(scorecard)
    let scorecardId = this.props.params.scorecardId;
    let holes = scorecard && scorecard.holes || [];

    return (
      <div className="hole-list">
        <h1 className="scorecard-title">{scorecard.name}</h1>
        <Table className="scorecard-stats" bordered condensed striped>
          <thead>
            <tr>
            <th>Stats</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Score:</td>
            <td>{scorecard.scoreTotal}</td>
          </tr>
          <tr>
            <td>FIR Average(%): </td>
            <td>{Math.round(scorecard.firAverage)}</td>
          </tr>
          <tr>
            <td>GIR Average(%): </td>
            <td>{Math.round(scorecard.girAverage)}</td>
          </tr>
          <tr>
            <td># of Putts</td>
            <td>{scorecard.puttTotal}</td>
          </tr>
        </tbody>
      </Table>
        <Carousel interval={0} className="carousel">
          {holes.map((x)=>
            <CarouselItem key={Math.round(Math.random() * 100000)}>
              <div className="hole-div">
                <Link className="hole-link" to={`/scorecards/${scorecardId}/hole/${x.holenumber - 1}`} state={{hole:x}}>Hole: {Number(x.holenumber)}</Link>
              </div>
              </CarouselItem>
            )}
          </Carousel>
          {this.props.children}
        </div>
      )
    }
});


export default ScorecardDetail;
