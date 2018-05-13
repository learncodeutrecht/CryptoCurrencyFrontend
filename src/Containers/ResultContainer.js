import React, { Component } from 'react';
import { Result } from '../Components/Result/Result';

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      dataArray: []
    }
    this.updateShowResult = this.updateShowResult.bind(this);
    this.setDataArray = this.setDataArray.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setDataArray();
    }

  // Generate data to display
  // Takes searchTerms and returns single values for each site
  // Array returned is in same order as sites array
  generateDataArray() {
    let dataArray = [];
    const term1 = this.props.searchTerms[0];
    const term2 = this.props.searchTerms[1];
    const sites = this.props.sites;
    const results = this.props.results;
    sites.forEach(site => {
      // Examine each result in results for site and term match
      // Add match to dataArray
      for (let i = 0; i < results.length; i++) {
        if (results[i].site === site && results[i].items.includes(term1) === true && results[i].items.includes(term2) === true) {
            dataArray.push(results[i].result);
          }
        }
      }
    )
    return dataArray;
  }

  setDataArray() {
    let dataArray = this.generateDataArray();
    this.setState({
      dataArray: dataArray
    })
  }

  updateShowResult() {
    this.setState({
      showResult: true
    })
  }

  render() {
    return <Result
            generateResult={this.generateResult}
            showResult={this.state.showResult}
            updateSearch={this.props.updateSearch}
            updateShowResult={this.updateShowResult}
            setDataArray={this.setDataArray}
            dataArray={this.state.dataArray}
            searchTerms={this.props.searchTerms}
            sites={this.props.sites}
            />;
  }


}

export default ResultContainer;
