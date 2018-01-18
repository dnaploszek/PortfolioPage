import * as React from 'react';
import './App.css';
import ParticleCanvasBackground from './Components/ParticleCanvasBackground/ParticleCanvasBackground';

const particleDensity = 80;

class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <ParticleCanvasBackground particlesDensity={particleDensity} maxParticles={particleDensity * particleDensity}/>
      </div>
    );
  }
}

export default App;
