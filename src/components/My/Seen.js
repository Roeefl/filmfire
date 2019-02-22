import { connect } from 'react-redux';
import React, { Component } from 'react';
import MovieCard from '../Movies/MovieCard';

class Seen extends Component {
  renderMovies() {
    const movies = this.props.seen.map(movie => {
      return (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      )
    });

    if (movies.length === 0) {
      return <div className='empty'>No Movies Added Yet</div>
    }

    return (
      <React.Fragment>
        {movies}
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className='seen movies'>
        { this.renderMovies() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { seen } = state;

  return { seen };
};

export default connect(
  mapStateToProps,
  { }
)(Seen);
