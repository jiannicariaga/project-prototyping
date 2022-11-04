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
    // Format request URL
    // Fetch data from Yelp API
    // Save result.businesses in this.state.results
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
