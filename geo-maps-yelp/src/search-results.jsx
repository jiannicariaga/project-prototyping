import React from 'react';

export default class SearchResults extends React.Component {
  render() {
    const results = this.props.results.map(result => {
      return (
        {/* Add React elements for a result */}
      );
    });
    return (
      <section>
        {results}
      </section>
    );
  }
}
