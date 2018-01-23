import * as React from 'react';

import './HomeScreen.css';
import ParticleCanvasBackground from '../ParticleCanvasBackground/ParticleCanvasBackground';

const particleDensity = 80;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home-screen--container">
        <ParticleCanvasBackground
          className="home-screen--background"
          particlesDensity={particleDensity}
          maxParticles={particleDensity * particleDensity}
        />
        <div className="home-screen--inner-container">
          <div className="home-screen--content-container">
            <p>Hello!</p>

            <p>My name is Darek and i'm a professional JavaScript Software Developer.</p>
          </div>
        </div>
      </div>
    );
  }
}
