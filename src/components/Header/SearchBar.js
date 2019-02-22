import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  updateQuery = (event) => {
    this.setState( { query: event.target.value } );
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form
        className="input search-form"
        onSubmit={ this.onFormSubmit }>
        <i className='fa fa-search' />
        <input
          type='text'
          placeholder={ this.props.placeholder }
          value={ this.state.query }
          onChange={ this.updateQuery } />
        <input
          type='submit'
          className='button alpha'
          value='Search' />
      </form>
    );
  }
}

export default SearchBar;
