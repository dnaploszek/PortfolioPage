import * as React from 'react';

import HText from '../../Components/UI/HighlightedText/HighlightedText';

import me from '../../assets/images/me.png';
import './AboutView.css';

export default class AboutView extends React.Component {
  render() {
    return (
      <div id="about" className="about-view--container secondary-color-background">
        <div className="about-view--half about-view--justified-text white-color">
          <p>
            Hello my name is <HText>Darek</HText> and i'm a <HText>JavaScript Software Developer</HText>.
            What was my road so far?
          </p>
          <p>
            I started my career as a software developer back in <HText>October 2014</HText>,
            when i got my first job as a <HText>C++ Software Engineer</HText>.
            I liked to solve various optimization problems, but that was <HText>not enough</HText>.
          </p>
          <p>
            In <HText>October 2016</HText> i switched my workplace and became <HText>Junior Java Developer</HText>.
            There i finished my first web service providing digital signature validation.
          </p>
          <p>
            In <HText>December 2016</HText> i stared a small company with my friend
            and we did a lot of <HText>freelance</HText> work since then.
            I decided that i'm going to <HText>stay focused</HText> and <HText>master JavaScript</HText>.
            I did some work on backend in Node.js, but i really liked <HText>React</HText> and
            decided that <HText>on my way to a fullstack developer</HText> i
            will <HText>master frontend web development first</HText>.
          </p>
          <p>
            In <HText>October 2017</HText> we decided to part ways and i became
            a <HText>Lead Frontend Developer</HText> in the company that was our earlier client.
            There i could increase
            my <HText>team leading skills</HText> and <HText>design my own projects architecture</HText>.
          </p>
          <p>
            In <HText>March 2018</HText> i want to move further and i'm
            currently <HText>available for job offers</HText>.
          </p>
        </div>
        <div className="about-view--half">
          <img className="about-view--picture" src={me}/>
        </div>
      </div>
    );
  }
}
