import React, { Component } from 'react';

class MovieActions extends Component {
  renderUpdateInBucket() {
    const { isInBucket, updateInBucket } = this.props;
    const color = (isInBucket ? 'added' : 'alpha');
    const icon = (isInBucket ? 'fa-minus-circle' : 'fa-plus-circle');

    return (
      <div className={`button ${color}`} onClick={updateInBucket}>
        <i className={`fas ${icon}`} /> {isInBucket ? 'Remove From' : 'Add to'} Bucket List
      </div>
    );
  }

  render() {
    return (
      <div className='actions'>
        { this.renderUpdateInBucket() }
      </div>
    );
  }
}

export default MovieActions;
