import React from 'react';
import store from '../store';
import {History} from 'react-router';
import update from 'react-addons-update';
import BackboneMixin from '../mixins/backbone';

//need hole number on the page//
const EditHole = React.createClass({

  mixins: [History,BackboneMixin],

  getModels(){
    let scorecardId = this.props.params.scorecardId;
    return {scorecard:store.getScorecard(scorecardId)}
  },

  handleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  },
  handleChange(prop,e){
    let newState = {};
    newState[prop] = {
      $set: e.target.value
    };
    this.setState({
      scorecard: update(this.state.scorecard, newState)
    });
  },
  handleSave(e){
    e.preventDefault();
    var scorecard = this.state.scorecard;
    var holeData = {
        partype: this.refs.partype.value,
        playerscore: this.refs.playerscore.value,
        fir: this.refs.fir.value,
        gir: this.refs.gir.value,
        putts: this.refs.putts.value
    };
    store.saveScorecard(scorecard,holeData)
  },
  render(){
    let scorecard = this.state.scorecard;
    let holes = scorecard && scorecard.holes || [];
    let hole = holes && holes[this.props.params.holeId] || {};
    //want the default value to be whatever is currently stored in that attribute or the default value if it is a new hole
    return (
      <fieldset>
        <h1>Hole {hole.holenumber}</h1>
        <form onSubmit={this.handleSave}>

          <label>Par Type</label>
          <select name="select"ref="partype">
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <label>Your Score</label>
          <input type="number" ref="playerscore" onChange={this.handleChange.bind(this,'playerscore')} defaultValue={hole.playerscore}/>

          <label>Number of Putts</label>
          <input type="number" ref="putts" onChange={this.handleChange.bind(this,'putts')} defaultValue={hole.putts}/>

          <label>Fairway in Regulation</label>
          <input type="checkbox" ref="fir" onChange={this.handleChange.bind(this,'fir')} defaultValue={hole.fir}/>

          <label>Green in Regulation</label>
          <input type="checkbox" ref="gir" onChange={this.handleChange.bind(this,'gir')} defaultValue={hole.gir}/>

          <button type="submit">Save Hole</button>

       </form>
    </fieldset>
    )
  }
})

export default EditHole;
