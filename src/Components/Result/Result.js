import React from 'react';
import './Result.css';
import Graph from '../Graph/Graph';


export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateSearch();
    this.props.updateShowResult();
  }

  render() {
    let result;
    let term1 = this.props.searchTerms[0];
    let term2 = this.props.searchTerms[1];
    if (term1 === term2) {
      result = (<p>Pick two different options</p>)
    } else {
      result = (<div>
      <p>Comparing {term1} + {term2}:</p>
      <div className="row">
      <div className='col'>
      <table className="table">
        <thead>
      <tr>
        <th scope="col">Site</th>
        <th scope="col">Bid</th>
        <th scope="col">Ask</th>
      </tr>
      </thead>
      <tbody>
      {
        this.props.sites.map((site, i) => {
          return <tr key={site}>
               <th scope="row">{site}</th>
               <td><p>{this.props.dataArray[i]}</p>
                 </td>
                 <td><p>{this.props.dataArray[i]}</p>
                   </td>
             </tr>
           })
         }
       </tbody>
      </table>
      </div>

      <div className='col'>
        <Graph
          dataArray={this.props.dataArray}/>
        </div>
      </div>
    </div>)
    }
    return (<div>
      <button className="btn btn-primary"
        onClick={this.handleClick}>GO</button>
      <hr />
      <div id="result">
      { this.props.showResult ===  true ? result
      : null }

      </div>
    </div>)
  }
}
