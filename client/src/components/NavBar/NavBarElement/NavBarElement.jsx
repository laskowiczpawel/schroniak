import React, { Component } from 'react';
import { Element } from './NavBarElement_styles';
import { withRouter } from 'react-router';

@withRouter
export default class NavBarElement extends Component {
  render() {
    return (
      <Element onClick={() => this.props.history.push(this.props.path)}>
        {this.props.name}
      </Element>
    );
  }
}
