import scorecard from './scorecard';
import Backbone from 'backbone';

const SearchCollection = Backbone.Collection.extend({
  model: scorecard,
  url(){
    return(
        "https://api.parse.com/1/classes/Scorecards?where=" + JSON.stringify({
          $all:  [{
              "name":{$regex: this.search}
            }]
        })
    )
  },
  setSearch(search){
    this.search = search;
  },
  parse(response){
    return response.results
  }
});

export default SearchCollection;
