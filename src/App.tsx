import * as React from 'react';

import HomeScreen from './Views/HomeScreen/HomeScreen';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HomeScreen/>
      </div>
    );
  }
}

export default App;
