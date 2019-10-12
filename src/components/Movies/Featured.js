import React, { Component } from 'react';
import MovieCards from './MovieCards';
import { connect } from 'react-redux';
import { loadFeatured } from '../../actions';

class Featured extends Component {
  componentDidMount() {
    if (this.props.featured.length === 0)
      this.props.loadFeatured();
  }

  render() {
    return (
      <div>
        <MovieCards movies={this.props.featured} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { featured } = state;

  return { featured };
};

export default connect(
  mapStateToProps,
  { loadFeatured }
)(Featured);
