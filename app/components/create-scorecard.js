import React from 'react';
import store from '../store';
import ScorecardList from '../components/scorecard-list';
import { History,Link } from 'react-router';
import BackboneMixin from '../mixins/backbone';

//add scorecard to the top of the list

const AddScorecard = React.createClass({

  mixins: [BackboneMixin],

  handleSubmit(e){
    e.preventDefault();
    store.saveScorecard({
      name: this.refs.name.value,
    }, {wait:true});

    this.refs.name.value = '';

  },
  render(){
    return (
      <div>
        <fieldset className="scorecard-fieldset">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add Scorecard" ref="name"/>
            <button type="submit">Add Scorecard</button>
          </form>
        </fieldset>
        <ScorecardList />
      </div>
    )
  }
})

export default AddScorecard;
