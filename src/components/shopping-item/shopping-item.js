import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField'

import './shopping-item.css'

class Item extends Component {
  render() {
    return (
      <span className="shopping-item">
        <TextField label="Para comprar" margin="normal" variant="outlined" />
      </span>
    );
  }
}

export default Item;
