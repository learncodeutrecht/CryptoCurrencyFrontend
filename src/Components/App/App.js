import React, { Component } from 'react';
import './App.css';

import Compare from '../Compare/Compare';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          id: '1',
          items: ['A', 'B', 'C'],
          active: 'A',
          key: 'menu1'
        },
        {
          id: '2',
          items: ['A', 'B', 'C'],
          active: 'A',
          key: 'menu2'
        }
      ],
      showResult: false,
      sites: ['Apples', 'Oranges', 'Bananas'],
      results: [
        {
          site: 'Bananas',
          items: ['A', 'B'],
          result: 'AB Bananas'
        },
        {
          site: 'Bananas',
          items: ['A', 'C'],
          result: 'AC Bananas'
        },
        {
          site: 'Bananas',
          items: ['B', 'C'],
          result: 'BC Bananas'
        },
        {
          site: 'Oranges',
          items: ['A', 'B'],
          result: 'AB Oranges'
        },
        {
          site: 'Oranges',
          items: ['A', 'C'],
          result: 'AC Oranges'
        },
        {
          site: 'Oranges',
          items: ['B', 'C'],
          result: 'BC Oranges'
        },
        {
          site: 'Apples',
          items: ['A', 'B'],
          result: 'AB Apples'
        },
        {
          site: 'Apples',
          items: ['A', 'C'],
          result: 'AC Apples'
        },
        {
          site: 'Apples',
          items: ['B', 'C'],
          result: 'BC Apples'
        },
      ]
    }

    this.updateActive = this.updateActive.bind(this);
    this.updateResult = this.updateResult.bind(this);
  }

  updateActive(id, active) {
    let menus = this.state.menus;
    for (let i=0; i<this.state.menus.length; i++) {
      if (this.state.menus[i].id === id) {
        menus[i].active = active;
        this.setState({
          menus: menus
        })
      }
    }
  }

  updateResult() {
    if (this.state.showResult === false) {
      this.setState({
        showResult: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br /><br />
          <h1 className="App-title">Welcome to CCompare</h1>
        </header>
        <p className="App-intro">
          <br />
          Pick two options
        </p>
        <div className="container">
          <Compare
            updateMenu={this.updateActive}
            menus={this.state.menus}
            showResult={this.state.showResult}
            updateResult={this.updateResult}
            sites={this.state.sites}
            results={this.state.results} />
        </div>

      </div>
    );
  }
}

export default App;
