import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Select from 'react-select';
import axios from 'axios';
import 'react-select/dist/react-select.css';
import { InputBreedStyle } from './search-styles';
import { InputCityStyle } from './search-styles';
import { ButtonStyle } from './search-styles';
import { SearchStyle } from './search-styles';

class SearchAll extends Component {
  state = {
    selectedOptionBreed: '',
    selectedOptionCity: '',
  };

  handleChangeBreed = selectedOptionBreed => {
    this.setState({ selectedOptionBreed });
  };

  handleChangeCity = selectedOptionCity => {
    this.setState({ selectedOptionCity });
  };

  getAnimals = () => {
    if ((this.state.selectedOptionBreed === '') & (this.state.selectedOptionCity.label !== '')) {
      axios.get('/api/animals?city=' + this.state.selectedOptionCity.label).then(data => {
        console.log(data);
      });
    } else if (
      (this.state.selectedOptionBreed.label !== '') &
      (this.state.selectedOptionCity === '')
    ) {
      axios.get('/api/animals?breed=' + this.state.selectedOptionBreed.label).then(data => {
        console.log(data);
      });
    } else {
      axios
        .get(
          '/api/animals?breed=' +
          this.state.selectedOptionBreed.label +
          '&city=' +
          this.state.selectedOptionCity.label,
      )
        .then(data => {
          console.log(data);
        });
    }
  };

  render() {
    console.log(2);
    const valueBreed = this.state.selectedOptionBreed && this.state.selectedOptionBreed.value;
    const valueCity = this.state.selectedOptionCity && this.state.selectedOptionCity.value;

    return (
      <SearchStyle>
        <InputBreedStyle>
          <Select
            name="form-field-name"
            value={valueBreed}
            onChange={this.handleChangeBreed}
            placeholder="Wybierz..."
            resetValue=""
            options={[
              { value: 'syberyjski', label: 'syberyjski' },
              { value: 'dachowiec', label: 'dachowiec' },
              { value: 'golden retriever', label: 'golden retriever' },
              { value: 'królik', label: 'królik' },
              { value: 'ryba', label: 'ryba' },
            ]}
          />
        </InputBreedStyle>
        <InputCityStyle>
          <Select
            name="form-field-name"
            value={valueCity}
            onChange={this.handleChangeCity}
            placeholder="Wybierz..."
            resetValue=""
            options={[
              { value: 'Wrocław', label: 'Wrocław' },
              { value: 'Warszawa', label: 'Warszawa' },
            ]}
          />
        </InputCityStyle>
        <ButtonStyle onClick={this.getAnimals}>
          <ReactSVG path="loup.svg" className="icon-loup" />
        </ButtonStyle>
      </SearchStyle>
    );
  }
}
export default SearchAll;
