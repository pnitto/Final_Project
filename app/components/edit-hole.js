import React from 'react';
import store from '../store';
import {History} from 'react-router';
import update from 'react-addons-update';
import BackboneMixin from '../mixins/backbone';
import {Input, Button,Table} from 'react-bootstrap';

//Editing hole is wonky

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
        fir: this.refs.fir.checked,
        gir: this.refs.gir.checked,
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
    store.saveScorecard(this.state.scorecard)
    this.history.goBack();
  },
  render(){
    let scorecard = this.state.scorecard;
    let holes = scorecard && scorecard.holes || [];
    let hole = holes && holes[this.props.params.holeIndex] || {};
    console.log(hole);
    return (
          <div className="edit-hole-div">
              <form className="edit-hole-form" onSubmit={this.handleSave}>
              <Input type="select" label="Par Type" className="par-type-select" name="select" ref="partype" onChange={this.handleChange} value={hole.partype}>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </Input>

               <Input className="input-player-score" label="Player Score" type="number" ref="playerscore" onChange={this.handleChange} value={hole.playerscore}/>

               <Input className="input-putts" label="# of Putts" type="number" ref="putts" onChange={this.handleChange} value={hole.putts}/>

             <label className="FIR">FIR</label>
               <input id="fir" className="input-fir" type="checkbox" ref="fir" onChange={this.handleChange} checked={hole.fir} />

             <label className="GIR">GIR</label>
               <input  id="gir" className="input-gir"  type="checkbox" ref="gir" onChange={this.handleChange} checked={hole.gir} />

            <div className="save-hole-div">
               <Button className="btn btn-success" type="submit">Save Hole</Button>
            </div>

           </form>
         </div>
    )
  }
});

export default EditHole;
