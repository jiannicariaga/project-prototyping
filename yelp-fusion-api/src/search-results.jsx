import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    const proxyUrl = '';
    const encodedUrl = encodeURIComponent('');
    const apiKey = '';
    const headers = { headers: { Authorization: `Bearer ${apiKey}` } };

    fetch(`${proxyUrl}${encodedUrl}`, headers)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.businesses });
        // // eslint-disable-next-line no-console
        // console.log(data.businesses);
      })
      .catch(err => console.error(err));
  }

  componentWillUnmount() {
    this.setState({ results: [] });
  }

  render() {
    const results = this.state.results.map(result => {
      const background = {
        background: `url(${result.image_url}) no-repeat center`,
        backgroundSize: 'cover',
        boxShadow: 'inset 0 0 0 100vw rgb(0 0 0 / 69%)'
      };
      const category = result.categories[0].title;

      return (
        <div className='eatery' key={result.id}>
          <div className='header row' style={background}>
            <div className='col-90'>
              <a className='name'>{result.name}</a>
              <p className='categories'>{category}</p>
            </div>
            <div className='col-10 text-right'>
              <span className='expand fas fa-angle-down'></span>
            </div>
          </div>
        </div>
      );
    });

    return results;
  }
}

export default SearchResults;
