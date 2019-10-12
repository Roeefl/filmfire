import React, { Component } from 'react';
import './UpperHeader.scss';

class UpperHeader extends Component {
  render() {
    return (
      <div className='upper-header'>
        <div className='social'>
          <i className='fab fa-facebook' />
          <i className='fab fa-twitter' />
          <i className='fab fa-instagram' />
        </div>
        
        <div className='links'>
          <div className='contact'>
            Contact Us
          </div>
        </div>
      </div>
    );
  }
}

export default UpperHeader;
