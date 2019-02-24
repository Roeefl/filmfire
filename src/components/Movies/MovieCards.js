import { connect } from 'react-redux';
import { selectMovie, loadMore } from '../../actions';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import './Movies.scss';
import logo from '../../logo.svg';
import MovieCard from './MovieCard/MovieCard';

class MovieCards extends Component {
  loadFunc = () => {
    this.props.loadMore();
  }

  render() {
    if (this.props.movies === false)
      return <img src={logo} className='App-logo' alt="logo" />;

    const movieCards = this.props.movies.map( movie => {
      return (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          aside={false}
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
  const { searchQuery } = state;

  return { searchQuery };
};

export default connect(
  mapStateToProps,
  { selectMovie, loadMore }
)(withRouter(MovieCards));
