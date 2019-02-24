import React, { Component } from 'react';
import './Confirm.scss';

class Confirm extends Component {
  render() {
    const { msg, yes, no } = this.props;

    return (
      <div className='confirm'>
        <div className='container'>
        
          <div className='overlay' onClick={no}>
          </div>

          <div className='panel'>

            <div className='message'>
              {msg}
            </div>

            <div className='actions'>
              <div className='button alpha' onClick={yes}>
                Yes
              </div>
              <div className='button alpha' onClick={no}>
                Cancel
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
