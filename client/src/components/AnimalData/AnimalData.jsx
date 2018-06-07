import React, { Component } from 'react';
import {Animal, Age, Data, Description, Image, Location, Name, Shelter, Foundation} from './AnimalData_styles';

export default class AnimalData extends Component {

  render() {
    return (
      <Animal>
        <Image src={this.props.animal.photo} />

        <Data>
          <Name>{this.props.animal.name}</Name>
          <Shelter>{this.props.animal.shelter}</Shelter>
          <Foundation>{this.props.animal.foundation}</Foundation>
          <Location>{this.props.animal.location}</Location>
          <Age>{this.props.animal.age}</Age>
          <Description>{this.props.animal.description}</Description>        
        </Data>
      </Animal>
    );
  }
};
