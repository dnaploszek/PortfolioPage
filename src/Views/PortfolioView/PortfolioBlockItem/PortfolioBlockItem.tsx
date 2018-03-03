import * as React from 'react';

import { PortfolioItem, PortfolioLink, PortfolioTypes } from '../PortfolioItems';
import './PortfolioBlockItem.css';

interface Props {
  item: PortfolioItem;
}

export default class PortfolioBlockItem extends React.Component<Props> {
  getTypeClassName = (type: PortfolioTypes) => {
    switch (type) {
      case PortfolioTypes.WEB:
        return 'portfolio-item--web-size';
      case PortfolioTypes.MOBILE:
        return 'portfolio-item--mobile-size';
      default:
        return '';
    }
  }

  render() {
    const {item} = this.props;
    return (
      <div>
        <p>
          {item.title}
        </p>
        <p>
          {item.description}
        </p>
        <div>
          {item.links && item.links.map((link: PortfolioLink) => (
            <a href={link.link}>{link.caption}</a>
          ))}
        </div>
        <img className={this.getTypeClassName(item.type)} src={item.image}/>
        <p>
          Technologies:
        </p>
        <ul>
          {item.technologies.map((tech: string) => (
            <li>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
