import React from 'react';
import store from '../store';
import {History} from 'react-router';
import update from 'react-addons-update';
import BackboneMixin from '../mixins/backbone';

const EditHole = React.createClass({

  mixins: [History,BackboneMixin],

  getModels(){
    let scorecardId = this.props.params.scorecardId;
    return {scorecard: store.getScorecard(scorecardId)}
  },

  handleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  },
  handleChange(prop,e){
    var holeData = {
        partype: Number(this.refs.partype.value),
        playerscore: Number(this.refs.playerscore.value),
        fir: this.refs.fir.checked,
        gir: this.refs.gir.checked,
        putts: Number(this.refs.putts.value),
        holenumber: Number(this.props.params.holeIndex) + 1
    };

    var newScorecard = update(this.state.scorecard, {
      holes: {
        $splice: [
          [this.props.params.holeIndex, 1, holeData]
        ]
      }
    });

    this.setState({
      scorecard: newScorecard
    });
  },
  handleSave(e){
    e.preventDefault();
    store.saveScorecard(this.state.scorecard);
  },
  render(){
    let scorecard = this.state.scorecard;
    let holes = scorecard && scorecard.holes || [];
    let hole = holes && holes[this.props.params.holeIndex] || {};
    console.log(hole);
    //want the default value to be whatever is currently stored in that attribute or the default value if it is a new hole
    return (
      <fieldset className="edit-hole-fieldset">
        <h1>Hole {hole.holenumber}</h1>
        <form onSubmit={this.handleSave}>
          <label><h3>Par Type</h3></label>
          <select className="par-type-select" name="select" ref="partype" onChange={this.handleChange} value={hole.partype}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label><h3>Your Score</h3></label>
          <input type="number" ref="playerscore" onChange={this.handleChange} value={hole.playerscore}/>

          <label><h3>Number of Putts</h3></label>
          <input type="number" ref="putts" onChange={this.handleChange} value={hole.putts}/>

        <label><h3>Fairway in Regulation</h3></label>
          <div className="switch">
          <input id="fir" type="checkbox" ref="fir" onChange={this.handleChange} checked={hole.fir} />
          <label htmlFor="fir"></label>
          </div>

          <label><h3>Green in Regulation</h3></label>
            <div className="switch">
            <input id="gir" type="checkbox" ref="gir" onChange={this.handleChange} checked={hole.gir} />
            <label htmlFor="gir"></label>
            </div>

          <button type="submit">Save Hole</button>

       </form>
    </fieldset>
    )
  }
});

export default EditHole;
