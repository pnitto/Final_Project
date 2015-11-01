import React from 'react';
import { Link, History} from 'react-router';
import store from '../store';
import BackboneMixin from '../mixins/backbone';
import moment from 'moment';



const ScorecardList = React.createClass({
  propTypes: {
    scorecards: React.PropTypes.object
  },
  mixins: [BackboneMixin,History],

  getModels(){
    return {
      scorecards: store.getScorecards()
    }
  },
  componentWillMount(){
    store.fetchScorecards();
  },
  handleDelete(scorecard,e){
    store.destroyScorecard(scorecard)
  },
  render(){
    var scorecards = this.state.scorecards;
    return (
      <div className="scorecard-header-l">
        <h1>Your Scorecards</h1>
          <ul className="scorecard-ul">
            {scorecards.map((x)=>{
              return (<li key={x.objectId}>
                <Link state={{scorecard:x}} to={`/scorecards/${x.objectId}`}>
                <span className="scorecard-name">{x.name}</span>
              </Link><h5>{moment(x.createdAt).format('MMMM Do YYYY, h:mm a')}</h5>
                <a><i onClick={this.handleDelete.bind(this,x)} className="fa fa-trash-o fa-2x"></i></a></li>)
            })}
          </ul>
      </div>
    )
  }
});




export default ScorecardList
