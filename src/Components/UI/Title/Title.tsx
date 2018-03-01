import * as React from 'react';

import './Title.css';

interface Props {
  children: React.ReactNode;
}

export default class Title extends React.PureComponent<Props> {
  render() {
    return (
      <h1 className="title font-header font-size-header text-bold white-color">
        {this.props.children}
      </h1>
    );
  }
}