import React from 'react';
import store from '../store';
import {History} from 'react-router';

//need hole number on the page//
const EditHole = React.createClass({
    propTypes: {
      partype: React.PropTypes.number.isRequired,
      playerscore: React.PropTypes.number.isRequired,
      fir: React.PropTypes.bool.isRequired,
      gir: React.PropTypes.bool.isRequired,
      putts: React.PropTypes.number.isRequired
  },

  mixins: [History],

  getInitialState(){
    return {
      hole: (this.props.location.state.hole) || { hole: {} }
    }
  },
  handleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  },
  handleSave(e){
    e.preventDefault();

    this.state.hole.set({
        partype: this.refs.partype.value,
        playerscore: this.refs.playerscore.value,
        fir: this.refs.fir.value,
        gir: this.refs.gir.value,
        putts: this.refs.putts.value
    })

    this.state.hole.save();

    this.setState({
      isEditing: false
    })

  },
  render(){
    let hole = this.state.hole
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
          <input type="number" ref="playerscore" defaultValue={hole.playerscore}/>

          <label>Number of Putts</label>
          <input type="number" ref="putts" defaultValue={hole.putts}/>

          <label>Fairway in Regulation</label>
          <input type="checkbox" ref="fir" defaultValue={hole.fir}/>

          <label>Green in Regulation</label>
          <input type="checkbox" ref="gir"defaultValue={hole.gir}/>

          <button type="submit">Save Hole</button>

       </form>
    </fieldset>
    )
  }
})

export default EditHole;
