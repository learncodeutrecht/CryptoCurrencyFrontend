import React, { Component } from 'react';
import './App.css';

import Compare from '../Compare/Compare';

export class App extends Component {
  displayName: 'App';
  propTypes: {
    menus: PropTypes.array,
    sites: PropTypes.array,
    results: PropTypes.array,
    updateSearch: PropTypes.func,
    updateMenu: PropTypes.func
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">CryptoCompare</div>
        </header>
        <p className="App-intro">
          <br />
          Pick two options
        </p>
        <div className="container">
          <Compare
            updateMenu={this.props.updateMenu}
            menus={this.props.menus}
            updateSearch={this.props.updateSearch}
            sites={this.props.sites}
            results={this.props.results}
            searchTerms={this.props.searchTerms} />
        </div>

      </div>
    );
  }
}

export default App;
