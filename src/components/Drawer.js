import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Cart from './Cart';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Drawer extends Component {

  render() {
    return (
      <div>
        <SwipeableDrawer
          anchor="right"
          open={this.props.drawerState.right}
          onClose={() => {this.props.onToggleDrawer(false)}}
          onOpen={() => {this.props.onToggleDrawer(true)}}
          BackdropProps={{invisible:true}}
        >
          <div
            tabIndex={0}
            role="button"
            // onClick={() => {this.props.onToggleDrawer(false)}}
            onKeyDown={() => {this.props.onToggleDrawer(false)}}
          >
            <Cart 
              cartData={this.props.cartData}
              onRemoveFromCart={(index) => this.props.onRemoveFromCart(index)}/>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(Drawer);