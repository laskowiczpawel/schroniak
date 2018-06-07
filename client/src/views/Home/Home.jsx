import React from 'react';
import { Container } from '../../utils/styledComponents';
import AnimalsList from '../../components/AnimalsList/AnimalsList';
import Searchbar from '../../components/Searchbar';

const Home = () => (
  <Container>
    <Searchbar />
    <AnimalsList />
  </Container>
);

export default Home;
