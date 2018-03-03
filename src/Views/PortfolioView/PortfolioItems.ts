import filttrImg from '../../assets/images/portfolio/filttr.png';
import filttrMobileImg from '../../assets/images/portfolio/filttr-mobile.png';
import cschoolImg from '../../assets/images/portfolio/cschool.png';
import connectisImg from '../../assets/images/portfolio/connectis.png';
import streampackImg from '../../assets/images/portfolio/streampack.png';
import sendoImg from '../../assets/images/portfolio/sendo.png';
import bankomatImg from '../../assets/images/portfolio/bankomat.png';
import ngsoftwareImg from '../../assets/images/portfolio/ngsoftware.png';

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  type: PortfolioTypes,
  technologies: Array<string>;
  links?: Array<PortfolioLink>;
}

export enum PortfolioTypes {
  MOBILE,
  WEB,
}

export interface PortfolioLink {
  caption: string;
  link: string;
}

const portfolioItems: Array<PortfolioItem> = [{
  title: 'FILTTR - Web Application',
  description: 'Polish startup letting IT specialists find a perfect job and companies find a fit software engineer.',
  type: PortfolioTypes.WEB,
  image: filttrImg,
  technologies: ['React', 'MobX', 'AngularJS', 'Java'],
  links: [{
    caption: 'website',
    link: 'https://www.filttr.pl',
  }],
}, {
  title: 'FILTTR - Mobile',
  description: 'Mobile application for FILTTR startup - both IOS and Android devices.',
  type: PortfolioTypes.MOBILE,
  image: filttrMobileImg,
  technologies: ['React Native', 'MobX'],
  links: [{
    caption: 'android',
    link: 'https://play.google.com/store/apps/details?id=pl.filttr.android',
  }, {
    caption: 'ios',
    link: 'https://itunes.apple.com/pl/app/filttr-perfectly-matched-jobs/id1274985964',
  }],
}, {
  title: 'C_school - Website',
  description: 'A free technology education model preparing for a first work as an IT specialist.',
  type: PortfolioTypes.WEB,
  image: cschoolImg,
  technologies: ['JavaScript', 'Wordpress'],
  links: [{
    caption: 'website',
    link: 'https://www.cschool.pl/en/',
  }],
}, {
  title: 'Connectis_ - Website',
  description: 'Connectis is a company mainly concerned on IT specialist and teams outsourcing.',
  type: PortfolioTypes.WEB,
  image: connectisImg,
  technologies: ['JavaScript', 'Wordpress', 'Node.js'],
  links: [{
    caption: 'website',
    link: 'https://www.connectis.pl',
  }],
}, {
  title: 'Streampack - Web application',
  description: 'Startup allowing users to send their packages with help from other users.',
  type: PortfolioTypes.WEB,
  image: streampackImg,
  technologies: ['Angular', 'Node.js', 'MongoDB'],
}, {
  title: 'Sendo - Mobile',
  description: 'A mobile app MVP used to send money to your friends through facebook or other social media.',
  type: PortfolioTypes.MOBILE,
  image: sendoImg,
  technologies: ['Ionic', 'Node.js', 'MongoDB'],
  links: [{
    caption: 'demo video',
    link: 'https://drive.google.com/file/d/0B96brQHk__EkRUMwNU1RRXpPMkU/view',
  }],
}, {
  title: 'Bankomat - Application',
  description: 'A simple desktop application used to show a quiz, send data to server and print coupons.',
  type: PortfolioTypes.WEB,
  image: bankomatImg,
  technologies: ['Electron', 'Vue.js', 'Node.js'],
  links: [{
    caption: 'demo video',
    link: 'https://vimeo.com/221334494',
  }, {
    caption: 'cooperation team',
    link: 'http://shot-me.pl/',
  }]
}, {
  title: 'NG Software - Website',
  description: 'NG Software was a small software founded by myself and my close friend.',
  type: PortfolioTypes.WEB,
  image: ngsoftwareImg,
  technologies: ['React'],
}];

export default portfolioItems;
