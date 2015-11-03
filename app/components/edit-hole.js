import React from 'react';
import store from '../store';
import {History} from 'react-router';
import update from 'react-addons-update';
import BackboneMixin from '../mixins/backbone';
import {Input, Button} from 'react-bootstrap';

const EditHole = React.createClass({

  mixins: [History,BackboneMixin],

  getModels(){
    let scorecardId = this.props.params.scorecardId;
    return {scorecard: store.getScorecard(scorecardId)}
  },

  handleEdit(){
    this.setState({
      isEditing: !this.state.isEditing
    })
  },

  handleChange(prop,e){

    var holeData = {
        partype: Number(this.refs.partype.getValue()),
        playerscore: Number(this.refs.playerscore.getValue()),
        fir: this.refs.fir.getChecked(),
        gir: this.refs.gir.getChecked(),
        putts: Number(this.refs.putts.getValue()),
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
    this.history.goBack();
  },
  render(){
    let scorecard = this.state.scorecard;
    let holes = scorecard && scorecard.holes || [];
    let hole = holes && holes[this.props.params.holeIndex] || {};
    console.log(hole);
    //want the default value to be whatever is currently stored in that attribute or the default value if it is a new hole
    return (
      <fieldset className="edit-hole-fieldset">
        <h3>Hole {hole.holenumber}</h3>
        <form onSubmit={this.handleSave}>
          <label><h5>Par Type</h5></label>
          <Input type="select" className="par-type-select" name="select" ref="partype" onChange={this.handleChange} value={hole.partype}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>

          <label><h5>Your Score</h5></label>
          <Input className="input-player-score" type="number" addonBefore="#" ref="playerscore" onChange={this.handleChange} value={hole.playerscore}/>

          <label><h5>Number of Putts</h5></label>
          <Input className="input-putts" type="number" addonBefore="#" ref="putts" onChange={this.handleChange} value={hole.putts}/>

        <label><h5>Fairway in Regulation</h5></label>
          <div className="switch">
          <Input id="fir" type="checkbox" ref="fir" onChange={this.handleChange} checked={hole.fir} />
          <label htmlFor="fir"></label>
          </div>

          <label><h5>Green in Regulation</h5></label>
            <div className="switch">
            <Input id="gir" type="checkbox" ref="gir" onChange={this.handleChange} checked={hole.gir} />
            <label htmlFor="gir"></label>
            </div>

          <Button className="btn btn-success" type="submit">Save Hole</Button>

       </form>
    </fieldset>
    )
  }
});

export default EditHole;
