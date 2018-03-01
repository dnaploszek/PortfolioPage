import angular from '../../assets/images/skills/angular.png';
import angularColor from '../../assets/images/skills/angular-color.png';
import cplusplus from '../../assets/images/skills/cplusplus.png';
import cplusplusColor from '../../assets/images/skills/cplusplus-color.png';
import css3 from '../../assets/images/skills/css3.png';
import css3Color from '../../assets/images/skills/css3-color.png';
import electron from '../../assets/images/skills/electron.png';
import electronColor from '../../assets/images/skills/electron-color.png';
import git from '../../assets/images/skills/git.png';
import gitColor from '../../assets/images/skills/git-color.png';
import html5 from '../../assets/images/skills/html5.png';
import html5Color from '../../assets/images/skills/html5-color.png';
import ionic from '../../assets/images/skills/ionic.png';
import ionicColor from '../../assets/images/skills/ionic-color.png';
import java from '../../assets/images/skills/java.png';
import javaColor from '../../assets/images/skills/java-color.png';
import javascript from '../../assets/images/skills/javascript.png';
import javascriptColor from '../../assets/images/skills/javascript-color.png';
import mobx from '../../assets/images/skills/mobx.png';
import mobxColor from '../../assets/images/skills/mobx-color.png';
import mongodb from '../../assets/images/skills/mongodb.png';
import mongodbColor from '../../assets/images/skills/mongodb-color.png';
import mssql from '../../assets/images/skills/mssql.png';
import mssqlColor from '../../assets/images/skills/mssql-color.png';
import nodejs from '../../assets/images/skills/nodejs.png';
import nodejsColor from '../../assets/images/skills/nodejs-color.png';
import react from '../../assets/images/skills/react.png';
import reactColor from '../../assets/images/skills/react-color.png';
import spring from '../../assets/images/skills/spring.png';
import springColor from '../../assets/images/skills/spring-color.png';
import typescript from '../../assets/images/skills/typescript.png';
import typescriptColor from '../../assets/images/skills/typescript-color.png';
import vue from '../../assets/images/skills/vue.png';
import vueColor from '../../assets/images/skills/vue-color.png';
import wordpress from '../../assets/images/skills/wordpress.png';
import wordpressColor from '../../assets/images/skills/wordpress-color.png';

export interface SkillIcon {
  key: string;
  icon: string;
  iconColor: string;
  description: string;
}

const icons: Array<SkillIcon> = [{
  key: 'js',
  icon: javascript,
  iconColor: javascriptColor,
  description: 'JavaScript - ES6 and beyond',
}, {
  key: 'react',
  icon: react,
  iconColor: reactColor,
  description: 'React.js and React Native',
}, {
  key: 'mobx',
  icon: mobx,
  iconColor: mobxColor,
  description: 'MobX',
}, {
  key: 'ts',
  icon: typescript,
  iconColor: typescriptColor,
  description: 'Typescript',
}, {
  key: 'html',
  icon: html5,
  iconColor: html5Color,
  description: 'HTML5',
}, {
  key: 'css',
  icon: css3,
  iconColor: css3Color,
  description: 'CSS3',
}, {
  key: 'node',
  icon: nodejs,
  iconColor: nodejsColor,
  description: 'Node.js',
}, {
  key: 'angular',
  icon: angular,
  iconColor: angularColor,
  description: 'AngularJS and Angular',
}, {
  key: 'git',
  icon: git,
  iconColor: gitColor,
  description: 'Git',
}, {
  key: 'vue',
  icon: vue,
  iconColor: vueColor,
  description: 'Vue.js',
}, {
  key: 'java',
  icon: java,
  iconColor: javaColor,
  description: 'Java 8',
}, {
  key: 'spring',
  icon: spring,
  iconColor: springColor,
  description: 'Spring',
}, {
  key: 'electron',
  icon: electron,
  iconColor: electronColor,
  description: 'Electron',
}, {
  key: 'ionic',
  icon: ionic,
  iconColor: ionicColor,
  description: 'Ionic',
}, {
  key: 'mssql',
  icon: mssql,
  iconColor: mssqlColor,
  description: 'MSSQL',
}, {
  key: 'mongodb',
  icon: mongodb,
  iconColor: mongodbColor,
  description: 'MongoDB (MERN stack)',
}, {
  key: 'cpp',
  icon: cplusplus,
  iconColor: cplusplusColor,
  description: 'C++',
}, {
  key: 'wordpress',
  icon: wordpress,
  iconColor: wordpressColor,
  description: 'Wordpress',
}];

export default icons;