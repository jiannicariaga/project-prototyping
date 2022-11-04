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

  requestData() {
    // eslint-disable-next-line no-console
    console.log('woo!');
  }

  render() {
    return (
      <>
        <SearchForm requestData={this.requestData}/>
        <SearchResults results={this.state.results} />
      </>
    );
  }
}
