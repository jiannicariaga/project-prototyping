import React from 'react';
import Map from '../components/map';
import SearchForm from '../components/search-form';
import SearchResults from '../components/search-results';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      geolocation: null
    };
    this.requestData = this.requestData.bind(this);
  }

  requestData(formInputs) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInputs)
    };
    fetch('/api/search', options)
      .then(response => response.json())
      .then(data => {
        const lat = data.region.center.latitude;
        const lng = data.region.center.longitude;
        this.setState({
          results: data.businesses,
          geolocation: { lat, lng }
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { results, geolocation } = this.state;
    const displayMap = geolocation
      ? <Map results={results} geolocation={geolocation} />
      : '';
    return (
      <>
        {displayMap}
        <SearchForm requestData={this.requestData}/>
        <SearchResults results={this.state.results} />
      </>
    );
  }
}
