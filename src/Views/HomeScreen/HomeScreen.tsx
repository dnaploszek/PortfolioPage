import * as React from 'react';

import ParticleCanvasBackground from '../../Components/ParticleCanvasBackground/ParticleCanvasBackground';
import './HomeScreen.css';
import HText from '../../Components/UI/HighlightedText/HighlightedText';

const MAX_PARTICLES = 2500;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home-screen--container">
        <ParticleCanvasBackground
          className="home-screen--background"
          maxParticles={MAX_PARTICLES}
        />
        <div className="home-screen--inner-container">
          <div className="home-screen--welcome-container font-header white-color">
            <p className="text-bold font-size-banner">
              Hi!
            </p>
            <p className="font-size-banner-description">
              My name is <HText>Darek</HText> and i'm a <HText>JavaScript Software Developer</HText>.
            </p>
          </div>
          <div className="home-screen--learn-more-container font-text action-color">
            <a href="#" className="home-screen--learn-more font-size-text">
              Learn more about me
              <div className="home-screen--arrow-bottom action-color"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
