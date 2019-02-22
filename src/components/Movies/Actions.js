import React, { Component } from 'react';

class Actions extends Component {
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

  renderAddToSeen() {
    // const { isInSeen, addToSeen } = this.props;
    // const color = (isInSeen ? 'added' : 'alpha');
    return;

    // return (
    //   <div className={`button  ${color}`} onClick={addToSeen}>
    //     <i className='fas fa-eye' /> {isInSeen ? 'Remove From' : 'Add to'} Seen List
    //   </div>
    // );
  }

  render() {
    return (
      <div className='actions'>
        { this.renderUpdateInBucket() }
        { this.renderAddToSeen() }
      </div>
    );
  }
}

export default Actions;
