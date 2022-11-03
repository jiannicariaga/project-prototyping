import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      locationInputActive: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    event.target.className === 'term-input'
      ? this.setState({ term: event.target.value })
      : this.setState({ location: event.target.value });
  }

  handleFocus(event) {
    this.setState({ locationInputActive: !this.state.locationInputActive });
  }

  getLocation(event) {

  }

  render() {
    const active = this.state.locationInputActive ? 'active' : '';
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            required
            type="text"
            placeholder="Tacos, Japanese, etc."
            className='term-input'
            onChange={this.handleChange}
            value={this.state.term} />
        </div>
        <div>
          <input
            required
            type="text"
            placeholder="City, State, or Zip Code"
            className={`location-input ${active}`}
            onFocus={this.handleFocus}
            onBlur={this.handleFocus}
            onChange={this.handleChange}
            value={this.state.location} />
          <div
            className='location-suggestion'
            onClick={this.getLocation} >
            <p>Current Location &#40;Recommended&#41;</p>
          </div>
        </div>
        <button type='submit'>Search</button>
      </form>
    );
  }
}
