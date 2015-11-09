import React from 'react';
import {History} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import c3 from 'c3';
import store from '../store';

//having to click on scorecard list first before being able to display graphs

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

    var labels = scorecards.map((x)=>{
      return x.name
    })
    labels.unshift('x')
    console.log(labels)


    var scores = scorecards.map((x)=>{
      return x.scoreTotal
    })
    scores.unshift('Round Score');
    console.log(scores)
    var colors = ['#1f77b4', '#0047DB', '#ff7f0e', '#761F2F', '#2ca02c', '#000', '#d62728', '#BFE727', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'];
    var scoreChart = c3.generate({
      bindto: "#scoreChart",
      size:{
        height: 400,
        width: 400
      },
      data: {
        x:'x',
        columns: [
          labels,
          scores
        ],
        type: 'bar',
        color: function (color, d) {
              return colors[d.index];
          }
      },
      axis: {
          x: {
              type: 'category',
              tick: {
                  multiline: false,
                  rotate:45
              },
              height: 130
          },
          y: {
            label:{
              text:"Score(strokes)",
              position: "outer-middle"
            }
          }
      }
    });

    var fir = scorecards.map((x)=>{
      return Math.round(x.firAverage)
    });
    fir.unshift('Fairway in Regulation')

    var gir = scorecards.map((x)=>{
      return Math.round(x.girAverage)
    });
    gir.unshift('Green in Regulation')
    console.log(gir)
    //console.log(fir)

    var firChart = c3.generate({
      bindto:"#firChart",
      size:{
        height: 400,
        width: 400
      },
      data:{
        x:'x',
        columns:[
          labels,
          fir,
          gir
        ],
        type:'spline'
      },
      axis: {
          x: {
              type: 'category',
              tick: {
                  multiline: false,
                  rotate:45
              },
              height: 130
          },
          y: {
            label: {
              text: "%(approx.)",
              position: "outer-middle"
            }
          }
      },
      point:{
        r: 5
      }
    });

  var putts = scorecards.map((x)=>{
    return x.puttTotal
  })
  putts.unshift('Number of Putts')
  //console.log(putts)


  var puttChart = c3.generate({
    bindto: "#puttChart",
    size: {
      height: 400,
      width: 400
    },
    data: {
      x:'x',
      columns:[
        labels,
        putts
      ],
      type: 'bar',
      color: function (color, d) {
            return colors[d.index];
        }
    },
    axis: {
        x: {
            type: 'category',
            tick: {
                multiline: false,
                rotate:45
            },
            height: 130
        },
        y:{
          label:{
            text:"# of Putts",
            position: "outer-middle"
          }
        }
    }
  })

    return (
      <div>
        <div id="scoreChart" className="score-graph"></div>
        <div id="firChart" className="gir-fir-graph"></div>
        <div id="puttChart" className="putt-graph"></div>
    </div>
    )
  }
});

export default Graph
