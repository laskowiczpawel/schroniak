import React, { Component } from 'react';
import { Container, Body } from './Index_styles';
import NavBar from '../../components/NavBar/NavBar';

export default class Index extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Body>
          {this.props.children}
        </Body>
      </Container>
    );
  }
}
