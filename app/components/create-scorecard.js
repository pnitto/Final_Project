import React from 'react';
import store from '../store';

const AddScorecard = React.createClass({

  handleSubmit(e){
    e.preventDefault();
    store.getScorecards().create({
      name: this.refs.name.value
    });
    this.refs.name.value = '';
  },
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Scorecard" ref="name"/>
        <input type="submit" value="Add Scorecard" />
      </form>
    )
  }
})

export default AddScorecard;
