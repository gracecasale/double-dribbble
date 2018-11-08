import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
