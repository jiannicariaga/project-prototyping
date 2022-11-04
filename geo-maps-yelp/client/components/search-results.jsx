import React from 'react';

export default class SearchResults extends React.Component {
  render(props) {
    const results = this.props.results.map(result => {
      const { id, name, phone, location } = result;
      return (
        <div key={id}>
          <h3>{name}</h3>
          <p>{phone}</p>
          <p>{location.address1}</p>
        </div>
      );
    });
    return (
      <section>
        {results}
      </section>
    );
  }
}
