import * as React from 'react';

import ParticleCanvasBackground from '../../Components/ParticleCanvasBackground/ParticleCanvasBackground';
import './HomeScreen.css';
import HText from '../../Components/UI/HighlightedText/HighlightedText';

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
          <div className="home-screen--content-container font-header white-color">
            <p className="text-bold font-size-banner">
              Hi!
            </p>
            <p className="font-size-banner-description">
              My name is <HText>Darek</HText> and i'm a <HText>JavaScript Software Developer</HText>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
