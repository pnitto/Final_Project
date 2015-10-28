import React from 'react';
import store from '../store';
import {History} from 'react-router';

//need hole number on the page//
const EditHole = React.createClass({
/*  propTypes: {
    partype: React.PropTypes.number,
    playerscore: React.PropTypes.number.isRequired,
    fir: React.PropTypes.bool,
    gir: React.PropTypes.bool,
    putts: React.PropTypes.number
  },
  */
  mixins: [History],
  getInitialState(){
    return {
      hole: (this.props.location.state.hole) || { hole: {} }
    }
  },
  handleSave(e){
    e.preventDefault();
    store.getHoles().create({
      partype: this.refs.partype.value,
      playerscore: this.refs.playerscore.value,
      fir: this.refs.fircheckbox.value,
      gir: this.refs.gircheckbox.value,
      putts: this.refs.puttscheckbox.value
    })
  },
  render(){
    return (
      <form onSubmit={this.handleSave}>
        <input type="number" placeholder="Par Type" ref="partype"/>
        <input type="number" placeholder="Add Score" ref="playerscore"/>
        <input type="number" placeholder="Number of Putts" ref="putts"/>

        <input type="checkbox" ref="fir"/>

        <input type="checkbox" ref="gir"/>
        <button type="submit">Save Button</button>
      </form>
    )
  }
})

export default EditHole;
