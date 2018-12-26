import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const mapToComponent = (data) => {
      return data.map((item, index) => {
        return (
          <li key={index}>
            <h4>{item.name}</h4>
            <span>{item.price}</span>
            <button onClick={() => {this.props.onRemoveFromCart(index)}}>remove</button>
          </li>
        )
      })
    }
    return (
      <div>
        {mapToComponent(this.props.cartData)}
      </div>
    );
  }
}

export default Cart;
