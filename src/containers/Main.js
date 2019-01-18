import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as actions from '../actions';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import Order from '../components/Order';

class Main extends Component {
  render() {
    return (
      <div>
        <Header
          onToggleDrawer={this.props.onToggleDrawer}
          count={this.props.cartData.length}/>
        <Drawer
          drawerState={this.props.drawerState}
          onToggleDrawer={this.props.onToggleDrawer}
          cartData={this.props.cartData}
          onRemoveFromCart={this.props.onRemoveFromCart}/>
        <Switch>
          <Route exact path='/' render={() => {
            return <ProductList 
              productData={this.props.productData}
              onAddToCart={this.props.onAddToCart}
              onSelectItem={this.props.onSelectItem}/>
            }}/>
          <Route path='/detail/:id' render={(props) => {
            return <ProductDetail
              onAddToCart={this.props.onAddToCart}
              productData={this.props.productData} 
              {...props}/>
            }
          }/>
          <Route path="/order" render={() => {
            return <Order cartData={this.props.cartData}></Order>
          }}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedKey: state.product.selectedKey,
    productData: state.product.productData,
    cartData: state.cart.cartData,
    drawerState: state.drawer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (item) => dispatch(actions.addToCart(item)),
    onRemoveFromCart: (index) => dispatch(actions.removeFromCart(index)),
    onToggleDrawer: (open) => dispatch(actions.toggleDrawer(open)),
    onSelectItem: (index) => dispatch(actions.selectItem(index))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));