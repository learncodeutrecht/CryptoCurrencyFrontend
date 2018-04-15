import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.updateResult();
  }
  render() {
    return(
      <button className="btn btn-primary" onClick={this.handleClick}>GO</button>
    )
  }
}

export default Button;
