import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './containers/Game';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
