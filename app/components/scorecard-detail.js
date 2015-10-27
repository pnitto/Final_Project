import React from 'react';
import {History} from 'react-router';
import store from '../store';
import Scorecard from '../models/scorecard'


const ScorecardDetail = React.createClass({
  mixins:[History],
  getInitialState(){
    return {
      scorecard: (this.props.location.state.scorecard) || {holes:[]}
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
    //console.log(this.props.location.state.scorecard)
    return (
      <div>
        <ul>
          {scorecard.holes.map((x)=><li>{x.holenumber}</li>)}
        </ul>
      </div>
    )
    }
})

export default ScorecardDetail;
