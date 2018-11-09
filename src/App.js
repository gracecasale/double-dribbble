import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import FullPageView from './layouts/FullPageView';


function App (props) {
    return (
      <FullPageView>
        <Header />
        <Main />
      </FullPageView>
    );
  }

export default App;
