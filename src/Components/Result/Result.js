import React from 'react';
import './Result.css';


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
    return (<div>
      <button className="btn btn-primary"
        onClick={this.handleClick}>GO</button>
      <hr />
      <div id="result">
      { this.props.showResult ===  true ? this.props.generateResult()
      : null }
      </div>
    </div>)
  }
}
