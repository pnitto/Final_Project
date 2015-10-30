import React from 'react';
import { Link, History} from 'react-router';
import store from '../store';
import BackboneMixin from '../mixins/backbone';



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
    store.destroyScorecard(scorecard).then(()=>{
    this.history.replaceState(null,'/');
  })
  },
  render(){
    var scorecards = this.state.scorecards;
    console.log(scorecards)
    return (
      <div>
        <h1>Your Scorecards</h1>
          <ul>
            {scorecards.map((x)=>{
              return (<li key={x.objectId}><Link state={{scorecard:x}} to={`/scorecards/${x.objectId}`}>{x.name}</Link><button onClick={this.handleDelete.bind(this,x)} className="delete-scorecard-btn" type="submit">X</button></li>)
            })}
          </ul>
      </div>
    )
  }
});




export default ScorecardList
