import React, { Component } from 'react';
import { Result } from '../Components/Result/Result';
import Graph from '../Components/Graph/Graph';

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false
    }
    this.updateShowResult = this.updateShowResult.bind(this);
    this.generateResult = this.generateResult.bind(this);
  }
  // Look up data for particular site
  checkActive(site) {
    // Define what user wants to compare
    let menu1 = this.props.searchTerms[0];
    let menu2 = this.props.searchTerms[1];
    // Entire data set
    let results = this.props.results;
    // Cycle through entire data set looking for a match
    for (let i = 0; i < results.length; i++) {
      if (results[i].site === site) {
        if (results[i].items.includes(menu1)
        && results[i].items.includes(menu2)) {
          return results[i].result;
        }
      }
    }
  }

  // Takes searchTerms and produces a table based on results
  generateResult() {
    let menu1 = this.props.searchTerms[0];
    let menu2 = this.props.searchTerms[1];

    // Check if search terms are the same
    if(menu1 === menu2) {
      return <p>Pick two different options</p>

    // Return table and graph in two columns
    } else {
      return (
            <div>
            <p>Comparing {menu1} + {menu2}:</p>
            <div className="row">
            <div className='col'>
            <table className="table">
              <thead>
            <tr>
              <th scope="col">Site</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
            <tbody>
            {
              this.props.sites.map(site => {
                return <tr key={site}>
                     <th scope="row">{site}</th>
                     <td><p>{this.checkActive(site)}</p>
                       </td>
                   </tr>
                 })
               }
             </tbody>
            </table>
          </div>

     <div className='col'>
       {/*Graph goes here*/}
     </div>
     </div>
     </div>)
    }
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
            updateShowResult={this.updateShowResult}/>;
  }


}

export default ResultContainer;
