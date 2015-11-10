import React from 'react';
import { Link, History} from 'react-router';
import store from '../store';
import Search from '../components/search';
import BackboneMixin from '../mixins/backbone';
import moment from 'moment';
import {Glyphicon, Button, Input} from 'react-bootstrap';
import _ from 'underscore';

const ScorecardList = React.createClass({

  propTypes: {
    scorecards: React.PropTypes.object
  },

  mixins: [BackboneMixin, History],

  componentWillMount(){
    store.searchScorecards('');
  },
  getModels(){
    return {
      scorecards: store.getScorecards()
    }
  },
  handleDelete(scorecard,e){
    store.destroyScorecard(scorecard)
  },
  handleChange(e){
    e.preventDefault();
    console.log(this.refs.courseName.value)
    store.searchScorecards(this.refs.courseName.value)
  },
  render(){
    var scorecards = this.state.scorecards;
    _.sortBy(scorecards,'createdAt').reverse();
    return (
      <div className="scorecard-header-l">
        <h1 className="scorecards-header">Your Scorecards</h1>
        <form onChange={this.handleChange}>
          <input type="text" ref="courseName" className="search-scorecards" placeholder="Search Scorecards"/>
        </form>
          <ul className="scorecard-ul">
            {scorecards.map((x)=>{
              return (<li key={x.objectId} className="scorecard-li">
                <Link state={{scorecard:x}} to={`/scorecards/${x.objectId}`} className="link-to-scorecard">
                <h3 className="scorecard-name">{x.name}</h3>
              </Link>
              <h5>{moment(x.createdAt).format('MMMM Do YYYY, h:mm a')}</h5>
            <Button className="delete-scorecard" bsSize="large"><Glyphicon glyph="remove" className="remove" onClick={this.handleDelete.bind(this,x)} /></Button></li>)
            })}
          </ul>
      </div>
    )
  }
});




export default ScorecardList
