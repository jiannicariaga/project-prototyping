import React from 'react';
import SearchForm from './search-form';
import SearchResults from './search-results';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.requestData = this.requestData.bind(this);
  }

  requestData(formInputs) {
    // REPLACE BELOW WITH FETCH TO SERVER

    // const proxyUrl = '';
    // const encodedUrl = encodeURIComponent('');
    // const apiKey = '';

    // const headers = { headers: { Authorization: `Bearer ${apiKey}` } };
    // fetch(`${proxyUrl}${encodedUrl}`, headers)
    //   .then(response => response.json())
    //   .then(data => this.setState({ results: data.businesses }))
    //   .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {/* <Map /> */}
        <SearchForm requestData={this.requestData}/>
        <SearchResults results={this.state.results} />
      </>
    );
  }
}
