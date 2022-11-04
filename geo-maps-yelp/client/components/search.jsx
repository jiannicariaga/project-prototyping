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
    const body = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInputs)
    };
    fetch('/api/search', body)
      .then(response => response.json())
      .then(data => this.setState({ results: data.businesses }))
      .catch(err => console.error(err));
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
