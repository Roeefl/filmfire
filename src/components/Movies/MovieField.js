import React, { Component } from 'react';
import EditableText from '../Common/EditableText';

class MovieField extends Component {
  render() {
    const { field, type, text, editable, saveChanges } = this.props;

    return (
      <div className={`movie-field ${field}`}>
        <div className='mini-title'>
          {field}
        </div>
        <EditableText
          editEnabled={editable}
          fieldName={field}
          type={type}
          text={text}
          saveChanges={saveChanges}
        />
      </div>
    );
  }
}

export default MovieField;
