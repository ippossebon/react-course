import React, { Component } from 'react';

import Item from '../shopping-item/shopping-item.js'

import './shopping-list.css'

class ShoppingList extends Component {
  state = {
    items: 1
  }

  addItem() {
    let count = this.state.items
    count = count + 1
    this.setState({ items: count })
  }

  renderItems() {
    var i;
    for (i = 0; i < this.state.items; i++) {
      return (
        <Item />
      )
    }
  }

  render() {
    return (
      <div className='shopping-list'>
        {this.renderItems()}

        <button className='shopping-list__add-item' onClick={this.addItem}>
        +
        </button>
      </div>
    );
  }
}

export default ShoppingList;
