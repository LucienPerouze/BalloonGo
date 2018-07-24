import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Map from './map';

class App extends Component {
  render() {
    return (
      <div className={'App'}>
          <Header/>
          <Map/>
      </div>
    );
  }
}

export default App;
