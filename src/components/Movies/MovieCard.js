import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './MovieCard.scss';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
        <div className='movie-card' >

            <div className='image'>
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
              </Link>
            </div>

          <div className='title'>
            {movie.Title}
          </div>
          
        </div>
    );
  }
}

export default MovieCard;
