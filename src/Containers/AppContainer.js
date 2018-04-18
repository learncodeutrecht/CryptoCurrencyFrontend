// This file contains the major data and needs to connect with the API.

import React, { Component } from 'react';
import { App } from '../Components/App/App';

class AppContainer extends Component {
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
      searchTerms: ['A', 'A'],
      sites: ['Apples', 'Oranges', 'Bananas'],
      results: [
        {
          site: 'Bananas',
          items: ['A', 'B'],
          result: 85
        },
        {
          site: 'Bananas',
          items: ['A', 'C'],
          result: 30
        },
        {
          site: 'Bananas',
          items: ['B', 'C'],
          result: 56
        },
        {
          site: 'Oranges',
          items: ['A', 'B'],
          result: 83
        },
        {
          site: 'Oranges',
          items: ['A', 'C'],
          result: 35
        },
        {
          site: 'Oranges',
          items: ['B', 'C'],
          result: 59
        },
        {
          site: 'Apples',
          items: ['A', 'B'],
          result: 90
        },
        {
          site: 'Apples',
          items: ['A', 'C'],
          result: 38
        },
        {
          site: 'Apples',
          items: ['B', 'C'],
          result: 60
        },
      ]
    }

    this.updateMenu = this.updateMenu.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  // Updates active menu item for display in menu
  updateMenu(id, active) {
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

  // Triggers a new result by updating the state of searchTerms
  updateSearch() {
    let searchTerms = [this.state.menus[0].active, this.state.menus[1].active];
    this.setState({
      searchTerms: searchTerms
    })
  }

  render() {
    return (
      <App
        menus={this.state.menus}
        sites={this.state.sites}
        results={this.state.results}
        updateMenu={this.updateMenu}
        updateSearch={this.updateSearch}
        searchTerms={this.state.searchTerms}
        />
    );
  }
}

export default AppContainer;
