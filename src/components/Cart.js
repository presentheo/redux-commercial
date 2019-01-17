import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

class Cart extends Component {
  render() {
    return (
      <List>
        {this.props.cartData.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link to={`/redux-record/detail/${item.id}`}>
                <ListItemAvatar>
                  <Avatar src={item.cover}/>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={item.creator}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <DeleteIcon onClick={() => {this.props.onRemoveFromCart(index)}}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </Link>
            </ListItem>
          )
        })}
      </List>
    );
  }
}

export default Cart;

