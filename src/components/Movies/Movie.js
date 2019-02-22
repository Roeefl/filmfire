import { connect } from 'react-redux';
import { selectMovie, fetchMovieData, updateInBucket, addToSeen, updateBucketMovieField } from '../../actions';
import React, { Component } from 'react';
import { info, credits } from './movieFields';
import MovieField from './MovieField';
import './Movie.scss';
import Actions from './Actions';
import Credits from './Credits';
import Confirm from '../Common/Confirm';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = { showRemoveDialog: false };
  }

  componentDidMount() {
    if (this.props.imdbID)
      this.props.fetchMovieData(this.props.imdbID, this.props.bucket);
  }

  updateInBucket = () => {
    if (this.props.movieInBucket) {
      this.setState({ showRemoveDialog: true });
      return;
    }

    this.props.updateInBucket(this.props.selectedMovie);
  }

  addToSeen = () => {
    if (this.props.movieInSeen)
      return;

    this.props.addToSeen(this.props.selectedMovie);
  }

  formatTitle = (title) => {
    return title.toLowerCase()
      .replace(/[^A-Za-z ]/g, '')
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  saveChanges = (fieldName, text) => {
    let formattedText = text;
    if (fieldName === 'Title')
      formattedText = this.formatTitle(text);

    this.props.updateBucketMovieField(this.props.bucket, this.props.selectedMovie.imdbID, fieldName, formattedText);
    this.forceUpdate();
  }

  renderCredits() {
    const { selectedMovie } = this.props;

    const allCredits = credits.map( credit => {
      let names = [];

      if (selectedMovie[credit])
        names = selectedMovie[credit].split(',');
      
      return (
        <Credits 
          key={credit}
          title={credit}
          names={names}
        />
      );
    });

    return (
      <div className='all-credits'>
        {allCredits}
      </div>
    );
  }

  renderInfo() {
    const { selectedMovie, movieInBucket } = this.props;

    const fields = info.map( field => {
      return (
        <MovieField 
          key={field.name}
          field={field.name}
          type={field.type}
          text={selectedMovie[field.name]}
          editable={movieInBucket ? true : false}
          saveChanges={this.saveChanges}
        />
      );
    });

    return (
      <div className='section info'>
        {fields}
      </div>
    );
  }

  removeFromBucket = () => {
    this.props.updateInBucket(this.props.selectedMovie);
    this.closeRemoveDialog();
  }

  closeRemoveDialog = () => {
    this.setState({ showRemoveDialog: false });
  }

  renderRemoveDialog() {
    if (!this.state.showRemoveDialog)
      return;

    return <Confirm yes={this.removeFromBucket} no={this.closeRemoveDialog} />
  }

  render() {
    const { selectedMovie, movieInSeen, movieInBucket } = this.props;

    return (
      <div className='movie'>

        { this.renderRemoveDialog() }

        <div className='content left'>
          <div className='image'>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          </div>

          { this.renderCredits() }
        </div>

        <div className='content right'>      
          <Actions isInSeen={movieInSeen} addToSeen={this.addToSeen} isInBucket={movieInBucket} updateInBucket={this.updateInBucket} />

          { this.renderInfo() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { selectedMovie, bucket, seen } = state;

  const movieInBucket = bucket.find(movie => movie.imdbID === selectedMovie.imdbID );
  const movieInSeen = seen.find(movie => movie.imdbID === selectedMovie.imdbID);

  return {
    bucket,
    selectedMovie: movieInBucket || selectedMovie,
    movieInBucket,
    movieInSeen,
    isInEither: (movieInBucket || movieInSeen),
    imdbID: ownProps.match.params.imdbID
  };
};

export default connect(
  mapStateToProps,
  { selectMovie, fetchMovieData, updateInBucket, addToSeen, updateBucketMovieField}
)(Movie);
