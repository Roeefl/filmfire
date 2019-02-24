import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { searchMovies } from '../../actions';
import './Header.scss';
import UpperHeader from './UpperHeader';
import SearchBar from '../Common/SearchBar';

class Header extends Component {
  onFormSubmit = (query) => {
    this.props.searchMovies(query, this.props.history);
  }

  render() {
    return (
      <div className='header' role='navigation'>
        <UpperHeader />

        <div className='lower-header'>

          <div className='logo'>
            <Link to='/'>
              <i className='fab fa-gripfire' /> FilmFire
            </Link>
          </div>
          <div className='searchbar'>
            <SearchBar onSubmit={this.onFormSubmit} placeholder='Movie title or related word'/>
          </div>

          <nav>
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
            <div className='item'>
              <Link to='/bucket'>
                <i className='fab fa-bitbucket' /> Bucket List
              </Link>
            </div>
          </nav>

        </div>

      </div>
    );
  }
}

export default connect(
  null,
  { searchMovies }
)(withRouter(Header));
