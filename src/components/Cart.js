import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Cart extends Component {
  render() {
    if (this.props.cartData.length < 1) {
      return <p style={{'padding':'20px', 'color':'#aaa'}}>카트에 상품이 없습니다!</p>
    }
    return (
      <List>
        {this.props.cartData.map((item, index) => {
          return (
            <Link to={`/detail/${item.id}`} key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={`/redux-record/images/cover-${item.id}.jpg`}/>
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
              </ListItem>
            </Link>
          )
        })}
      </List>
    );
  }
}

export default Cart;

