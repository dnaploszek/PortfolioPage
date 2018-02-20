import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export default class HighlightedText extends React.Component<Props> {
  render() {
    return (
      <span className="action-color text-bold">
        {this.props.children}
      </span>
    );
  }
}