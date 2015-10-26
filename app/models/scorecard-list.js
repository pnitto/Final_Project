import Scorecard from '../models/scorecard';

const ScorecardList = Backbone.Collection.extend({
  model: Scorecard,
  url: "https://api.parse.com/1/classes/Scorecards",
  parse(response){
    response.results
  }
});

export default ScorecardList;
