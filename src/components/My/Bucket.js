import { connect } from 'react-redux';
import React, { Component } from 'react';
import MovieCard from '../Movies/MovieCard/MovieCard';

class Bucket extends Component {
  renderMovies() {
    const movies = this.props.bucket.map(movie => {
      return (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      )
    });

    if (movies.length === 0)
      return <div className='empty'>No Movies Added Yet</div>
      
    return (
      <React.Fragment>
        {movies}
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className='bucket movies'>
        { this.renderMovies() }
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
)(Bucket);
