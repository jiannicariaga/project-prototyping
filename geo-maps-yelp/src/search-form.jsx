import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      locationInputActive: false,
      geolocation: null,
      formMessage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ formMessage: null });
    // eslint-disable-next-line no-console
    console.log(this.state);

    // Check location and geolocation values
    // Call (parent) method and pass in appropriate term and location
    this.props.requestData();
  }

  handleChange(event) {
    if (event.target.className.includes('term-input')) {
      this.setState({ term: event.target.value });
    }
    if (event.target.className.includes('location-input')) {
      if (this.state.geolocation) {
        this.setState({
          geolocation: null,
          formMessage: 'Geolocation removed.'
        });
      }
      this.setState({ location: event.target.value });
    }
  }

  handleFocus(event) {
    this.setState({ locationInputActive: !this.state.locationInputActive });
  }

  getLocation(event) {
    if (!navigator.geolocation) {
      this.setState = ({ formMessage: 'Geolocation is not supported.' });
      return;
    }
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.setState({
        location: 'Current Location',
        geolocation: { lat: latitude, lng: longitude },
        formMessage: 'Geolocation added.'
      });
    });
  }

  render() {
    const active = this.state.locationInputActive ? ' active' : '';
    return (
      <section>
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
              className={`location-input${active}`}
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
          <span>{this.state.formMessage}</span>
        </form>
      </section>
    );
  }
}
