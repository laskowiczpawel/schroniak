import React, { PureComponent } from 'react';
import Nav from './Nav';
import All from './All';
import { SearchContainer, SearchImage } from './styles';

class Searchbar extends PureComponent {
  state = {
    tab: 'all',
  };

  changeTab = tab => this.setState({ tab });

  render() {
    return (
      <SearchImage>
        <SearchContainer>
          <Nav changeTab={this.changeTab} tab={this.state.tab} />
          <All tab={this.state.tab} />
        </SearchContainer>
      </SearchImage>
    );
  }
}

export default Searchbar;
