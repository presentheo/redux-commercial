import React, { Component } from 'react';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemList: [
        {title: 'pants'}
      ]
    }
  }
  render() {

    const mapToComponent = (data) => {
      return data.map((el, i) => {
        return (
          <div key={i}>
            <h4>{el.title}</h4>
          </div>
        )
      })
    }
    return (
      <div>
        {mapToComponent(this.state.itemList)}
      </div>
    );
  }
}

export default Cart;
