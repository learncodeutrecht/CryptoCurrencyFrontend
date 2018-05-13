import React from 'react';
import './Compare.css';

import Menu from './Components/Menu/Menu';
import ResultContainer from './Components/Result/ResultContainer';


class Compare extends React.Component {
  displayName: 'Compare';
  propTypes: {
    updateMenu: PropTypes.func,
    menus: PropTypes.array,
    results: PropTypes.array,
    sites: PropTypes.array,
    updateSearch: PropTypes.func,
    showResult: PropTypes.bool
  }
  render() {
    return(
      <div>
          <div className="container">
            <div className="row">
              {
                this.props.menus.map(menu => {
                return (
                  <div key={menu.key} className="col">
                      <Menu
                          menus={this.props.menus}
                          menuID={menu.id}
                          items={menu.items}
                          updateMenu={this.props.updateMenu}
                          active={menu.active}
                      />
                  </div>
                )
                })
              }
         </div>
        <ResultContainer
          sites={this.props.sites}
          results={this.props.results}
          updateSearch={this.props.updateSearch}
          searchTerms={this.props.searchTerms} />
      </div>
    </div>
    )
  }
}

export default Compare;
