import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = () => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 15
  }
})

class Cart extends Component {
  render() {
    const {classes} = this.props;

    if (this.props.cartData.length < 1) {
      return <p style={{'padding':'20px', 'color':'#aaa'}}>카트에 상품이 없습니다!</p>
    }
    return (
      <List>
        {this.props.cartData.map((item, index) => {
          return (
            <ListItem>
              <Link className={classes.link} to={`/detail/${item.id}`} key={index}>
                <ListItemAvatar>
                  <Avatar src={`/redux-record/images/cover-${item.id}.jpg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={item.creator}
                />
                <span>x {item.quantity}</span>
              </Link>
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <DeleteIcon onClick={() => {this.props.onRemoveFromCart(index)}}/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    );
  }
}

export default withStyles(styles)(Cart);
