import React from 'react';
import SearchForm from './search-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <SearchForm />
      </>
    );
  }
}
