import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );


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
            onClick={() => {this.props.onToggleDrawer(false)}}
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