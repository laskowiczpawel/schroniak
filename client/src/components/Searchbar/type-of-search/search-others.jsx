import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import Select from 'react-select';
import axios from 'axios';
import 'react-select/dist/react-select.css';
import { InputBreedStyle } from './search-styles';
import { InputCityStyle } from './search-styles';
import { ButtonStyle } from './search-styles';
import { SearchStyle } from './search-styles';

class SearchOthers extends Component {
  state = {
    selectedOptionType: '',
    selectedOptionCity: ''
  }

  handleChangeType = (selectedOptionType) => {
    this.setState({ selectedOptionType });
    console.log(`Selected: ${selectedOptionType.label}`);
  }

  handleChangeCity = (selectedOptionCity) => {
    this.setState({ selectedOptionCity });
    console.log(`Selected: ${selectedOptionCity.label}`);
  }

  render() {
    const valueBreed = this.state.selectedOptionType && this.state.selectedOptionType.value;
    const valueCity = this.state.selectedOptionCity && this.state.selectedOptionCity.value;

    return (
      <SearchStyle>
        <InputBreedStyle>
          <Select
            name="form-field-name"
            value={valueBreed}
            onChange={this.handleChangeType}
            placeholder="Wybierz..."
            resetValue=''
            options={[
              { value: 'królik', label: 'królik' },
              { value: 'ryba', label: 'ryba' }
            ]}
          />
        </InputBreedStyle>
        <InputCityStyle>
          <Select
            name="form-field-name"
            value={valueCity}
            onChange={this.handleChangeCity}
            placeholder="Wybierz..."
            resetValue=''
            options={[
              { value: 'Wrocław', label: 'Wrocław' },
              { value: 'Warszawa', label: 'Warszawa' }
            ]}
          />
        </InputCityStyle>
        <ButtonStyle onClick={this.getAnimals}>
          <ReactSVG
            path='loup.svg'
            className="icon-loup"/>
        </ButtonStyle>
      </SearchStyle>
    );
  }

  getAnimals = () => {
    if (this.state.selectedOptionType==='' & this.state.selectedOptionCity.label!=='') {
      axios.get('http://localhost:3000/others?city=' + this.state.selectedOptionCity.label)
        .then((data) => {
          console.log(data);
        });
    }
    else if (this.state.selectedOptionType.label!=='' & this.state.selectedOptionCity==='') {
      axios.get('http://localhost:3000/others?breed=' + this.state.selectedOptionType.label)
        .then((data) => {
          console.log(data);
        });
    }
    else {
      axios.get('http://localhost:3000/others?breed=' + this.state.selectedOptionType.label + '&city=' + this.state.selectedOptionCity.label)
        .then((data) => {
          console.log(data);
        });
    }
  }
}

  export default SearchOthers;
