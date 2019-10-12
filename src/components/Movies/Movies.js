import React, { Component } from 'react';
import MovieCards from './MovieCards';
import { connect } from 'react-redux';

class Movies extends Component {
  render() {
    return (
      <div>
        <MovieCards movies={this.props.movies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { movies } = state;

  return { movies };
};

export default connect(
  mapStateToProps,
  { }
)(Movies);
