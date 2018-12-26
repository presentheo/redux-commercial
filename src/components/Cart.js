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
      <div style={{'width':'40%', 'float':'left', 'margin':'20px', 'padding':'20px', 'border':'1px solid #000'}}>
        {mapToComponent(this.props.cartData)}
      </div>
    );
  }
}

export default Cart;
