import * as React from 'react';

import ParticleCanvasBackground from '../../Components/ParticleCanvasBackground/ParticleCanvasBackground';
import './HomeView.css';
import HText from '../../Components/UI/HighlightedText/HighlightedText';

const MAX_PARTICLES = 2500;

export default class HomeView extends React.Component {
  render() {
    return (
      <div className="home-view--container">
        <ParticleCanvasBackground
          className="home-view--background"
          maxParticles={MAX_PARTICLES}
        />
        <div className="home-view--inner-container">
          <div className="home-view--welcome-container font-header white-color">
            <p className="text-bold font-size-banner">
              Hi!
            </p>
            <p className="font-size-banner-description">
              My name is <HText>Darek</HText> and i'm a <HText>JavaScript Software Developer</HText>.
            </p>
          </div>
          <div className="home-view--learn-more-container font-text action-color">
            <a href="#about" className="home-view--learn-more font-size-text">
              Learn more about me
              <div className="home-view--arrow-bottom action-color"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
