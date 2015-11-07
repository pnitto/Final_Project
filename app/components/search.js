import React from 'react';
import {Link,History} from 'react-router';
import store from '../store';
import BackboneMixin from '../mixins/backbone';
import {Input} from 'react-bootstrap';


const Search = React.createClass({

  mixins: [History, BackboneMixin],

  getModels(){
    return{
      SearchCollection: store.getSearch()
    }
  },
  handleSubmit(e){
    e.preventDefault();
    let search = this.refs.name.getValue();
    store.searchScorecards(search);

  },
  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search Scorecards" ref="name"/>
      </form>
      <ul>
      {this.state.SearchCollection.map((x)=>{
        return(<li key={x.objectId}>{x.name}</li>)
      })}
      </ul>
      </div>
)
}
})

export default Search;
