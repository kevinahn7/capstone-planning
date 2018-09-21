import React, { Component } from 'react';
import HomeBody from './components/HomeBody';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomeBody />
      </div>
    );
  }
}

export default App;
