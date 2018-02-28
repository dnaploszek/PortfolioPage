import * as React from 'react';

import './SkillsView.css';
import icons from './SkillsIcons';

export default class SkillsView extends React.Component {
  render() {
    return (
      <div className="skills-view--container main-color-background">
        {icons.map((icon) => (
          <img className="skills-view--skill-icon" src={icon}/>
        ))}
      </div>
    );
  }
}
