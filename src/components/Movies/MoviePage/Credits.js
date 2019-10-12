import React, { Component } from 'react';
import './Credits.scss';

class Credits extends Component {
  renderNames() {
    const names = this.props.names.map(name => {
      return (
        <div key={name} className='name'>
          {name}
        </div>
      );
    });

    return (
      <div className='names'>
        {names}
      </div>
    );
  }
  
  render() {
    return (
      <div className='credits'>
        <h5 className='title'>
          {this.props.title}
        </h5>

        { this.renderNames() }
      </div>
    );
  }
}

export default Credits;
