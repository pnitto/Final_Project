import React from 'react';
import store from '../store';
import ScorecardList from '../components/scorecard-list';
import { History } from 'react-router';

const AddScorecard = React.createClass({

  handleSubmit(e){
    e.preventDefault();
    store.getScorecards().create({
      name: this.refs.name.value,
      creator: store.getSession().get('currentUser')
    }, {wait:true});

    this.refs.name.value = '';

  },
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add Scorecard" ref="name"/>
          <input type="submit" value="Add Scorecard" />
        </form>
        <ScorecardList />
    </div>
    )
  }
})

export default AddScorecard;
