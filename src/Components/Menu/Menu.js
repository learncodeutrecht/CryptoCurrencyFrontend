import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.updateMenu(this.props.menuID, event.target.name);

  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.active}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
              this.props.items.map((item) => {
                let key = `${item}_${this.props.menuID}`
                return <a className="dropdown-item"
                          onClick={this.handleClick}
                          name={item}
                          key={key}>{item}</a>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
