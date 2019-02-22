import { connect } from 'react-redux';
import { selectMovie, loadMoreMovies } from '../../actions';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import './Movies.scss';
import logo from '../../logo.svg';
import MovieCard from './MovieCard';
import { MAX_SCROLL_PAGE } from '../../lib/settings';

class Movies extends Component {
  loadFunc = () => {
    const { query, page } = this.props.searchQuery;

    if (page >= 0 && page <= MAX_SCROLL_PAGE)
      this.props.loadMoreMovies(query, page);
  }

  render() {
    if (this.props.movies === false)
      return <img src={logo} className='App-logo' alt="logo" />;

    const movieCards = this.props.movies.map( movie => {
      return (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      );
    });

    return (
      <InfiniteScroll
        className='movies'
        pageStart={0}
        initialLoad={false}
        loadMore={this.loadFunc}
        hasMore={this.props.searchQuery.ready}
      >
        {movieCards}
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  const { movies, searchQuery } = state;

  return { movies, searchQuery };
};

export default connect(
  mapStateToProps,
  { selectMovie, loadMoreMovies }
)(withRouter(Movies));
