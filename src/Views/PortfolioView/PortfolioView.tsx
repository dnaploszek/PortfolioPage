import * as React from 'react';

import Title from '../../Components/UI/Title/Title';
import PortfolioBlockItem from './PortfolioBlockItem/PortfolioBlockItem';

import portfolioItems, { PortfolioItem } from './PortfolioItems';
import './PortfolioView.css';

export default class PortfolioView extends React.Component {
  render() {
    return (
      <div className="portfolio-view--container secondary-color-background">
        <Title>
          My portfolio
        </Title>
        <div className="portfolio-view--blocks-container">
        {portfolioItems.map((item: PortfolioItem) => <PortfolioBlockItem item={item}/>)}
        </div>
      </div>
    );
  }
}
