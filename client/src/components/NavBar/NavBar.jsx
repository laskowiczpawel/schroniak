import React, { Component } from 'react';
import { Container, Logo, Texts, Textlogo, Text, Navi } from './NavBar_styles';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router';
import NavBarElement from './NavBarElement/NavBarElement';

const data = [
  {
    name: 'logowanie',
    id: '1',
    path: 'offer',
  },
  {
    name: 'rejestracja',
    id: '2',
    path: 'offer1',
  },
  {
    name: 'kontakt',
    id: '3',
    path: 'offer2',
  },
];

@withRouter
export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Logo>
          <ReactSVG path="img/sygnet.svg" />
          <Texts>
            <Textlogo>Schroniak.pl</Textlogo>
            <Text>Pokochaj Zwierzaka</Text>
          </Texts>
        </Logo>
        <Navi>{data.map(item => <NavBarElement key={item.id} {...item} />)}</Navi>
      </Container>
    );
  }
}
