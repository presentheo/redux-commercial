import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component{
  render() {
    const {classes} = this.props;
    return (
      <header className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Redux-market
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={this.props.count} color="secondary">
                <ShoppingCartIcon
                  onClick={() => {this.props.onToggleDrawer(true)}}/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
    );

  }
}

export default withStyles(styles)(Header);
