import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import FullPageView from './layouts/FullPageView';


class App extends Component {
  render() {
    return (
      <FullPageView>
        <Header />
        <Main />
      </FullPageView>
    );
  }
}

export default App;
