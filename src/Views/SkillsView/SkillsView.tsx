import * as React from 'react';

import Title from '../../Components/UI/Title/Title';
import SkillAnimatedIcon from './SkillAnimatedIcon/SkillAnimatedIcon';

import icons, { SkillIcon } from './SkillsIcons';
import './SkillsView.css';

export default class SkillsView extends React.Component {
  render() {
    return (
      <div className="skills-view--container main-color-background">
        <Title>
          My skills
        </Title>
        <div className="skills-view--icons-container">
          {icons.map((icon: SkillIcon) => <SkillAnimatedIcon key={icon.key} icon={icon}/>)}
        </div>
      </div>
    );
  }
}
