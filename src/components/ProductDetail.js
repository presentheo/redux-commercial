import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.productData.name}
        </h1>
      </div>
    );
  }
}

export default ProductDetail;
