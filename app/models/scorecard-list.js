import Scorecard from '../models/scorecard';
import Backbone from 'backbone';

const ScorecardList = Backbone.Collection.extend({
  model: Scorecard,
  url(){
    return (
      "https://api.parse.com/1/classes/Scorecards?&where=" + JSON.stringify({
      "name":  {
        $regex: this.search
      }
    })
 )
},
comparator(model){
  return -model.get('time');
},
  parse(response){
    return response.results

  },
  setSearch(search){
    this.search = search;
  },
});

export default ScorecardList;
