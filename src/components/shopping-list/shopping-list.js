import React, { Component } from 'react';

import Item from '../shopping-item/shopping-item.js'

import './shopping-list.css'

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          text: 'Para comprar'
        }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const newItem = {
      text: 'Mais um item'
    }
    let newItemsList = [...this.state.items];
    newItemsList.push(newItem)

    this.setState({ items: newItemsList })
  }


  render() {
    console.log(this.state.items)
    return (
      <div className='shopping-list'>
        {this.state.items.map(
          (item, i) => <Item key={`item-${i}`} label={item.text}/>
        )}

        <button className='shopping-list__add-item' onClick={this.addItem}>
        +
        </button>
      </div>
    );
  }
}

export default ShoppingList;
