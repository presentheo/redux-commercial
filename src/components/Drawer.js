import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

import Cart from './Cart';

const styles = (theme) => ({
  drawerWrap: {
    minWidth: 280,
    paddingRight: 10,
    paddingLeft: 10
  }
});

class Drawer extends Component {

  render() {
    const {classes} = this.props;

    return (
      <SwipeableDrawer
      anchor="right"
      open={this.props.drawerState.right}
      onClose={() => {this.props.onToggleDrawer(false)}}
      onOpen={() => {this.props.onToggleDrawer(true)}}
      BackdropProps={{invisible:true}}
      >
        <div
          className={classes.drawerWrap}
          tabIndex={0}
          role="button"
          onKeyDown={() => {this.props.onToggleDrawer(false)}}
        >
          <Cart 
            cartData={this.props.cartData}
            onRemoveFromCart={(index) => this.props.onRemoveFromCart(index)}/>
          <Button variant="contained" color="primary" fullWidth={true}>
            <Link to="/order">구매하기</Link>
          </Button>
        </div>
      </SwipeableDrawer>
    );
  }
}

export default withStyles(styles)(Drawer);