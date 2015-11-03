import React from 'react';
import store from '../store';
import ScorecardList from '../components/scorecard-list';
import { History,Link } from 'react-router';
import BackboneMixin from '../mixins/backbone';
import {Input,Button} from 'react-bootstrap';

//add scorecard to the top of the list

const AddScorecard = React.createClass({

  mixins: [BackboneMixin],

  handleSubmit(e){
    e.preventDefault();
    store.saveScorecard({
      name: this.refs.name.getValue(),
    }, {wait:true});

      this.refs.name.getValue();

  },
  render(){
    return (
      <div>
        <fieldset className="scorecard-fieldset">
          <form onSubmit={this.handleSubmit}>
            <Input type="text" placeholder="Add Scorecard" ref="name"/>
            <Button className="btn btn-success" type="submit">Add Scorecard</Button>
          </form>
        </fieldset>
        <ScorecardList />
      </div>
    )
  }
})

export default AddScorecard;
