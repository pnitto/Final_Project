import React from 'react';
import { Link } from 'react-router';
import store from '../store';


const ScorecardList = React.createClass({
  propTypes: {
    scorecards: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      scorecards: store.getScorecards()
    }
  },
  componentWillMount(){
    this.props.scorecards.fetch();
    this.props.scorecards.on('sync add remove', this.forceUpdate.bind(this,null), this)
  },
  componentWillUnmount(){
    this.props.scorecards.off('sync add remove', null, this);
  },
  handleDelete(scorecard,e){
    console.log(scorecard)
    var delete_scorecard = this.props.scorecards.get(scorecard.objectId)
    delete_scorecard.destroy();
  },
  render(){
    var scorecards = this.props.scorecards.toJSON();
    //console.log(scorecards)
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
