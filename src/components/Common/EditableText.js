import React, { Component } from 'react';
import './EditableText.scss';
import TextareaAutosize from 'react-textarea-autosize';
import moment from 'moment';

class EditableText extends Component {
  state = {
    editMode: false,
    text: '',
    error: false
  };

  updateText = (event) => {
    this.setState( { text: event.target.value } );
  }
  
  startEditMode = (e) => {
    if (this.state.editMode)
      return;

    this.setState({
      editMode: true,
      text: this.props.text
    });
  }

  saveEditMode = (e) => {
    if (!this.state.editMode)
      return;

    const error = this.hasError(this.state.text, this.props.type);
    const { errorMsg, formatted } = error

    if (errorMsg) {
      this.setState({ error: errorMsg });
      return;
    }

    this.setState({ editMode: false, error: false });
    this.props.saveChanges(this.props.fieldName, formatted);
  }

  renderActions() {
    if (!this.props.editEnabled)
      return;

    const enableSave = this.state.editMode ? 'enabled' : 'disabled';
    const enableEdit = this.state.editMode ? 'disabled' : 'enabled';

    return (
      <div className='actions'>
        <div className={`button icon ${enableEdit}`} onClick={this.startEditMode}>
          <i className='fas fa-edit' />
        </div>
        <div className={`button icon ${enableSave}`} onClick={this.saveEditMode}>
          <i className='fas fa-check-double' />
        </div>
      </div>
    );
  }

  // Validation
  hasError = (val, type) => {
    if (type === 'str') {
      if (!val || val.length === 0)
        return { errorMsg: 'I need content. Do not leave me empty, please. :(' };

      return { formatted: val.trim() }
    }
    if (type === 'date') {
      const m = moment(val);
      
      if (!m.isValid())
        return { errorMsg: 'Invalid date entered. MomentJS is used here, so literally just enter anything remotely similar to a valid date.' };

      return { formatted: m.format('DD MMM YYYY') };
    }

    return false;
  }

  renderError() {
    if (!this.state.error)
      return;

    return (
      <div className='show-error'>
        {this.state.error}
      </div>
    );
  }

  renderContent() {
    if (this.state.editMode) {
      return (
        <div className='container'>
          <TextareaAutosize
            className='content'
            value={ this.state.text }
            onChange={ this.updateText }
          />

          { this.renderError() }
        </div>
      );
    }

    return (
      <div className='content'>
        {this.props.text}
      </div>
    );
  }

  render() {
    return (
      <div className='editable'>
        { this.renderActions() }
        { this.renderContent() }
      </div>
    );
  }
}

export default EditableText;
