import React from 'react';
import './Graph.css';
import * as d3 from 'd3';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray : [1, 2, 3]
    }
  }
  componentDidMount() {
    this.setState({
      dataArray: this.props.dataArray
    })
    this.makeGraph();
  }
  componentDidUpdate(nextProps, nextState) {
    if (nextProps.dataArray !== this.state.dataArray) {
      this.makeGraph();
    }
  }
  makeGraph() {
    const data1 = this.props.dataArray;
    return d3.select(".graph")
      .selectAll('div')
      .data(data1)
        .enter()
        .append('div')
        .style('width', function(d) { return d + 'px';})
        .text(function(d) { return d; })
  }

  render() {
    return(<div className='graph'></div>)
  }
}

export default Graph;
