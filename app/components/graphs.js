import React from 'react';
import {History} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import c3 from 'c3';
import store from '../store';


const Graph = React.createClass({

  mixins: [History,BackboneMixin],

  componentWillMount(){
    store.fetchScorecards();
  },

  getModels(){
    return {
      scorecards: store.getScorecards()
    }
  },

  render(){
    var scorecards = this.state.scorecards;
    console.log(scorecards)
    var scores = scorecards.map((x)=>{
      return x.scoreTotal
    })
    scores.unshift('Scorecards');
    //console.log(scores)
    var scoreChart = c3.generate({
      bindto: "#scoreChart",
      data: {
        columns: [
          scores
        ],
        type: 'spline'
      }
    });

    var fir = scorecards.map((x)=>{
      return x.firAverage
    });
    fir.unshift('Scorecards')
    //console.log(fir)

    var firChart = c3.generate({
      bindto:"#firChart",
      data:{
        columns:[
            fir
        ],
        type:'spline'
      }
    });

  var gir = scorecards.map((x)=>{
    return x.girAverage
  });
  gir.unshift('Scorecards')
  //console.log(gir)
  var girChart = c3.generate({
    bindto: "#girChart",
    data: {
      columns:[
        gir
      ],
      type: 'spline'
    }
  })

  var putts = scorecards.map((x)=>{
    return x.puttTotal
  })
  putts.unshift('Scorecards')
  console.log(putts)
  var puttChart = c3.generate({
    bindto: "#puttChart",
    data: {
      columns:[
        putts
      ],
      type: 'bar'
    }
  })
    return (
      <div>
        <div id="scoreChart"></div>
        <div id="firChart"></div>
        <div id="girChart"></div>
        <div id="puttChart"></div>
    </div>
    )
  }
});

export default Graph
