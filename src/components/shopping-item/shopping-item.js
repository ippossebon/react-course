import React, { Component } from 'react';
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'

import './shopping-item.css'

class Item extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  }

  render() {
    return (
      <span className="shopping-item">
        <TextField
          label={this.props.label}
          margin="normal"
          variant="outlined" />
      </span>
    );
  }
}

export default Item;
