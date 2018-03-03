import * as React from 'react';

import { SkillIcon } from '../SkillsIcons';

import './SkillAnimatedIcon.css';
const ANIMATION_TIME = 500; // ms

interface Props {
  icon: SkillIcon;
}

interface State {
  mouseOn: boolean;
  isAnimating: boolean;
}

export default class SkillAnimatedIcon extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      mouseOn: false,
      isAnimating: false,
    };
  }

  get animateClass() {
    return (this.state.mouseOn || this.state.isAnimating) ? 'animate' : '';
  }

  handleMouseEnter = () => {
    this.setState({
      mouseOn: true,
      isAnimating: true,
    });
    setTimeout(
      () => {
        this.setState({
          isAnimating: false,
        });
      },
      ANIMATION_TIME
    );
  }

  handleMouseLeave = () => {
    this.setState({
      mouseOn: false,
    });
  }

  render() {
    const { icon } = this.props;
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={`skill-animated-icon--container ${this.animateClass}`}
      >
        <img className="skill-animated-icon--image" src={icon.icon}/>
        <img className="skill-animated-icon--image skill-animated-icon--image-color" src={icon.iconColor}/>
        <div className="skill-animated-icon--description main-color-background white-color font-size-small-text">
          {icon.description}
        </div>
      </div>
    );
  }
}
