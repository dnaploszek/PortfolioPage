import * as React from 'react';

import HomeView from './Views/HomeView/HomeView';
import AboutView from './Views/AboutView/AboutView';
import SkillsView from './Views/SkillsView/SkillsView';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HomeView/>
        <AboutView/>
        <SkillsView/>
      </div>
    );
  }
}

export default App;
