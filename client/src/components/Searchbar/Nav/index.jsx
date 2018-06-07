import React from 'react';
import ReactSVG from 'react-svg';
import { Container, List, ListItem, Name } from './styles';

const Nav = ({ changeTab, tab }) => (
  <Container>
    <List>
      <ListItem active={tab === 'all'} onClick={() => changeTab('all')}>
        <ReactSVG path="menu.svg" />
        <Name> Wszystkie </Name>
      </ListItem>
      <ListItem active={tab === 'dogs'} onClick={() => changeTab('dogs')}>
        <ReactSVG path="dog.svg" />
        <Name>Psy</Name>
      </ListItem>
      <ListItem active={tab === 'cats'} onClick={() => changeTab('cats')}>
        <ReactSVG path="cat.svg" />
        <Name>Koty</Name>
      </ListItem>
      <ListItem active={tab === 'others'} onClick={() => changeTab('others')}>
        <ReactSVG path="rabbit.svg" />
        <Name>Inne</Name>
      </ListItem>
    </List>
  </Container>
);

export default Nav;
