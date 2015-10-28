import Scorecard from '../models/scorecard';
import Backbone from 'backbone';

const ScorecardList = Backbone.Collection.extend({
  model: Scorecard,
  url: "https://api.parse.com/1/classes/Scorecards",
  parse(response){
    return response.results;
  }
});

export default ScorecardList;
