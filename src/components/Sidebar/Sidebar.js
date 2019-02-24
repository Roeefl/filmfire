import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './Sidebar.scss';
import MovieCard from '../Movies/MovieCard/MovieCard';

class Sidebar extends Component {
  renderRecent() {
    const recent = this.props.bucket.slice(0, 3).map( movie => {
      return (
        <MovieCard key={movie.imdbID} movie={movie} aside={true} />
      )
    });

    return (
      <div className='recent-bucket'>
        {recent}
      </div>
    )
  }

  render() {
    return (
      <div className='sidebar'>
        <nav>
          <ul className='types'>
            <Link to='/'>
              <li>Featured</li>
            </Link>
            <Link to='/movies'>
              <li>Search</li>
            </Link>
          </ul>
        </nav>

        <div className='ui divider' />

        <nav>
          <h2>Recently Added to Bucket</h2>

          { this.renderRecent() }
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { bucket } = state;

  return { bucket };
};

export default connect(
  mapStateToProps,
  {  }
)(Sidebar);
