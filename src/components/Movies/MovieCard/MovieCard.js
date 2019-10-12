import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './MovieCard.scss';

class MovieCard extends Component {
  trimTitle = (title) => {
    const maxLen = 26;
    const addDots = (title.length > maxLen ? '...' : '');
    
    return title.substring(0, maxLen).concat(addDots);
  }

  render() {
    const { movie, aside } = this.props;
    const style = (aside ? 'wide' : 'tall');

    return (
      <Link to={`/movie/${movie.imdbID}`}>
        <article className={`movie-card ${style}`}>
          <div className='image'>
            <img src={movie.Poster} alt={movie.Title} />
          </div>

          <div className='details'>
            <div className='title'>
              { this.trimTitle(movie.Title) }
            </div>

            <div className='year'>
              {movie.Year}
            </div>
          </div>
        </article>
      </Link>
    );
  }
}

export default MovieCard;
