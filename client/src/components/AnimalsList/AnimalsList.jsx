import React, { Component } from 'react';
import axios from 'axios';
import AnimalData from '../AnimalData/AnimalData';

export default class AnimalsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
    };
  }

  componentWillMount() {
    this.getAnimals();
  }

    getAnimals = () => {
      axios.get('/api/pets')
        .then((data) => {
          const animals = data.data;
          this.setState({ animals });
        });
    }

    render() {
      console.log(this.state.animals)
      return (
        <div>
          {this.state.animals.map((animal) => {
          return <AnimalData key={animal.name} animal={animal} />;
          })}
        </div>
      );
    }
}
