import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Drawer from '../components/Drawer';

class Main extends Component {
  render() {
    return (
      <div>
        <Header
          count={this.props.cartData.length}/>
        <div className='main-visual'></div>
        <Drawer/>
        <Cart 
          cartData={this.props.cartData}
          onRemoveFromCart={(index) => this.props.onRemoveFromCart(index)}/>
        <ProductList 
          productData={this.props.productData}
          onAddToCart={(item) => this.props.onAddToCart(item)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productData: state.product.productData,
    cartData: state.cart.cartData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (item) => dispatch(actions.addToCart(item)),
    onRemoveFromCart: (index) => dispatch(actions.removeFromCart(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);