import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CurrencyTableContainer from './containers/CurrencyTableContainer';

class App extends Component {
  componentDidMount(){
    // fetch('http://www.apilayer.net/api/live?access_key=63d2ba6c2facc01aa57379fdc96acadf')
    // .then(response => response.json())
    // .then(r => {
    //   console.log(r);
    //   if (r.success)
    //     console.log('quotes',r.quotes);
    //     else
    //     console.log(r.error.info);
    // })
    // .catch(reason => console.error('reason', reason));
}

  

  render() {
    return (
      <div className="App">
        <CurrencyTableContainer />
      </div>
    );
  }
}

export default App;
