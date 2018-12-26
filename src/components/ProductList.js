import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {

  render() {
    const mapToComponent = (data) => {
      return data.map((item, index) => {
        return (
          <li key={index}>
            <ProductCard
              name={item.name}
              price={item.price}
              onAddToCart={this.props.onAddToCart}/>
          </li>
        )
      }) 
    }
    return (
      <ul style={{'width':'40%', 'float':'left', 'margin':'20px', 'padding':'20px', 'border':'1px solid #000'}}>
        {mapToComponent(this.props.productData)}
      </ul>
    );
  }
}

export default ProductList;
