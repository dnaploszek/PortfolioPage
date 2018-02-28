import * as React from 'react';

import HomeView from './Views/HomeView/HomeView';

import './App.css';
import AboutView from './Views/AboutView/AboutView';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HomeView/>
        <AboutView/>
      </div>
    );
  }
}

export default App;
