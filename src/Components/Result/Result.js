import React from 'react';
import './Result.css';

class Result extends React.Component {
  checkActive(site) {
    let menu1 = this.props.menus[0];
    let menu2 = this.props.menus[1];
    let results = this.props.results;
    for(let i=0; i<results.length; i++) {
      if(results[i].site === site) {
        if(results[i].items.includes(menu1.active)
        && results[i].items.includes(menu2.active)) {
          return (<p>{results[i].result}</p>)
        }
      }
    }
  }

  displayResult() {
    let menu1 = this.props.menus[0];
    let menu2 = this.props.menus[1];
    if(menu1.active === menu2.active) {
      return <p>Pick two different options</p>
    } else {
            return(
              <div>
                <p>Comparing {menu1.active} + {menu2.active}:</p>
                <table className="table">
                  <thead>
                <tr>
                  <th scope="col">Fruit</th>
                  <th scope="col">Result</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.sites.map(site => {
                    return <tr key={site}>
                         <th scope="row">{site}</th>
                         <td>{this.checkActive(site)}
                           </td>

                       </tr>
                     })
                   }
             </tbody>
           </table>
         </div>)
          }
  }

  showResult() {
    if (this.props.showResult === true) {
      return (this.displayResult())
    }
  }
  render() {
    return <div><hr />{this.showResult()}</div>
  }
}

export default Result;
