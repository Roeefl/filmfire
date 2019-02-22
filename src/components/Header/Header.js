import { connect } from 'react-redux';
import { searchMovies } from '../../actions';
import React, { Component } from 'react';
import './Header.scss';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

class Header extends Component {
  onFormSubmit = (query) => {
    this.props.searchMovies(query, this.props.history);
  }

  render() {
    return (
      <div className='header' role='navigation'>
        <div className='logo'>
          <Link to='/'>
            <i className='fab fa-gripfire' /> FilmFire
          </Link>
        </div>
        <div className='nav'>
          <div className='item'>
            <Link to='/'>
              <i className='fas fa-igloo' /> Home
            </Link>
          </div>
          <div className='item'>
            <Link to='/about'>
            <i className='fas fa-question-circle' /> About
            </Link>
          </div>
        </div>
        <div className='nav'>
        <div className='item'>
            <Link to='/bucket'>
              <i className='fab fa-bitbucket' /> Bucket List
            </Link>
          </div>
          {/* <div className='item'>
            <Link to='/seen'>
              <i className='fas fa-check-circle' /> Seen
            </Link>
          </div> */}
        </div>
        <div className='searchbar'>
          <SearchBar onSubmit={this.onFormSubmit} placeholder='Movie title or related word'/>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { searchMovies }
)(withRouter(Header));
