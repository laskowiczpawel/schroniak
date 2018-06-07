import React from 'react';
import SearchAll from '../type-of-search/search-all';
import SearchOthers from '../type-of-search/search-others';
import SearchCats from '../type-of-search/search-cats';
import SearchDogs from '../type-of-search/search-dogs';
import Container from './styles';

const tabs = {
  all: SearchAll,
  dogs: SearchDogs,
  cats: SearchCats,
  others: SearchOthers,
};

const All = ({ tab }) => {
  const Component = tabs[tab];

  return (
    <Container>
      <Component />
    </Container>
  );
};

export default All;
