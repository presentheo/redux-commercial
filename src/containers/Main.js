import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import Header from '../components/Header';
import Drawer from '../components/Drawer';

class Main extends Component {
  render() {
    return (
      <div>
        <Header
          onToggleDrawer={this.props.onToggleDrawer}
          count={this.props.cartData.length}/>
        <div className='main-visual'></div>
        <Drawer
          drawerState={this.props.drawerState}
          onToggleDrawer={this.props.onToggleDrawer}
          cartData={this.props.cartData}
          onRemoveFromCart={this.props.onRemoveFromCart}/>
        <ProductList 
          productData={this.props.productData}
          onAddToCart={this.props.onAddToCart}/>
        <ProductDetail
          productData={this.props.productData}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productData: state.product.productData,
    cartData: state.cart.cartData,
    drawerState: state.drawer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (item) => dispatch(actions.addToCart(item)),
    onRemoveFromCart: (index) => dispatch(actions.removeFromCart(index)),
    onToggleDrawer: (open) => dispatch(actions.toggleDrawer(open))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);