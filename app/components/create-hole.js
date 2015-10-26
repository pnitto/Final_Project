import React from 'react';
import store from '../store';


const AddHole = React.createClass({
  propTypes: {
    holenumber: React.PropTypes.number,
    partype: React.PropTypes.number,
    playerscore: React.PropTypes.number.isRequired,
    fircheckbox: React.PropTypes.bool,
    gircheckbox: React.PropTypes.bool,
    puttscheckbox: React.PropTypes.number
  },
  handleSubmit(e){
    e.preventDefault();
    store.getHoles().create({
      holenumber: this.refs.holenumber.value,
      partype: this.refs.partype.value,
      playerscore: this.refs.playerscore.value,
      fircheckbox: this.refs.fircheckbox.value,
      gircheckbox: this.refs.gircheckbox.value,
      puttscheckbox: this.refs.puttscheckbox.value
    })
  },
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Hole Number" ref="holenumber" />
        <input type="number" placeholder="Par Type" ref="partype"/>
        <input type="number" placeholder="Add Score" ref="playerscore"/>
        <input type="checkbox" ref="fircheckbox"/>
        <input type="checkbox" ref="gircheckbox"/>
        <input type="checkbox" ref="puttscheckbox"/>
        <input type="submit" />
      </form>
    )
  }
})

export default AddHole;
