import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {

  constructor(props){
    super(props);
    this.state = {
      propductData: [
        {title: 'shirts'},
        {title: 'glasses'},
        {title: 'cap'}
      ]
    }
  }

  handleClick = () => {
    
  }

  render() {
    const mapToComponent = (data) => {
      return data.map((el, i) => {
        return (
          <Product
            title={el.title}
            key={i}
            onClick={this.handleClick}
          ></Product>
        )
      }) 
    }
    return (
      <div>
        {mapToComponent(this.state.propductData)}
      </div>
    );
  }
}

export default ProductList;
