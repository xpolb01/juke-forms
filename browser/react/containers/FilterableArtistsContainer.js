import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilteredArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {filterInput: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  filterArtists(artists) {
    const filterInput = this.state.filterInput;
    const matching = new RegExp(filterInput, 'gi');
    artists = artists.filter( artist => {
      return artist.name.match(matching);
    });
    return artists;
  }

  handleChange(event) {
    this.setState({filterInput: event.target.value})
  }

  render() {
    const filteredArtists = this.filterArtists(this.props.artists);
    return (
      <div>
        <FilterInput value={this.state.filterInput} onChange={this.handleChange}/>
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}

