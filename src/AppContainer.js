// This file contains the major data and needs to connect with the API.

import React, { Component } from 'react';
import { App } from './App';
import Crypto from '../src/Utils/Crypto';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          id: '1',
          items: ['Default', 'B', 'C'],
          active: 'Default',
          key: 'menu1'
        },
        {
          id: '2',
          items: ['Default', 'B', 'C'],
          active: 'Default',
          key: 'menu2'
        }
      ],
      searchTerms: ['A', 'A'],
      sites: ['Bitstamp', 'Bittrex', 'Kraken'],
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
      ],
      data: ''
    }

    this.updateMenu = this.updateMenu.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.generateMenus = this.generateMenus.bind(this);
  }


  // Before render, sets state to json response from Crypto API
  // Uses this to assign menus
  componentDidMount() {
    Crypto.getData().then(data => {
      this.setState({
        data: data
      });
      this.generateMenus(2);
    }
  );
  }

  // Method that returns data type you want
  // data: {website: [{rate1: '', rate2:'', etc}, {}], website: [{}, {}], website: [{}, {}]}
  // keys: rate1, rate2, pairing, date, currencies(ARRAY)
  getData(dataType) {
    const data = this.state.data;
    // Declare empty variable for data to return at end of this method
    let finalData;

    // Switch statement to handle different arguments and assign returnData
    switch(dataType) {
      case "currencies":
        // Delare array of websites
        // Example: [bitstamp, bittrex, kraken]
        const websiteArray = Object.keys(data);
        // Declare empty master array for currencies that will be filled by following code
        let currencyArray = [];
        // Cycle through each website
        websiteArray.forEach(website => {
          // Declare website value array
          // Example: [{…}, {…}]
          const websiteValueArray = data[website];
          // Cycle through each dataObject of website value array
          websiteValueArray.forEach(dataObject => {
            // Declare currencies for single dataObject
            // Example: ["BCH", "BTC"]
            const currencies = dataObject.currencies;
            // Cycle through each currency
            currencies.forEach(currency => {
              // Check if currency is already in master currencyArray
              // Only add it to currencyArray if it is not there already
              if (!currencyArray.includes(currency)) {
                currencyArray.push(currency)
              }
            })
          })
        })
        // At this point, currencyArray will be filled with all unique currencies
        finalData = currencyArray;
        break;
      default:
        finalData = data;
    }
    return finalData;
}
  // Generates menu content based on data in this.state.data using getData method
  generateMenus(numberOfMenus) {
    let menus = [];
    let currencies = this.getData("currencies");
    let startingId = 1;
    for (let i = 0; i < numberOfMenus; i++) {
      const newMenu = {
        id: startingId,
        items: currencies,
        active: currencies[0],
        key: `menu${startingId}`
      };
      menus.push(newMenu);
      startingId++;

    };
    this.setState({
      menus: menus
    })
  }

  // Updates active menu item for display in menu
  updateMenu(id, active) {
    let menus = this.state.menus;
    for (let i = 0; i < this.state.menus.length; i++) {
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
        data={this.state.data}
        />

    );
  }
}

export default AppContainer;
