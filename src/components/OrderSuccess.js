import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = () => ({
  title: {
    paddingTop: 120,
    textAlign: 'center'
  },
  button: {
    marginTop: 60
  }
  
})

class OrderSuccess extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.title}>
        <Typography variant="h3">주문이 완료되었습니다 :)</Typography>
        <Button 
          component={Link}
          to="/"
          className={classes.button} 
          variant="contained" 
          color="primary">계속 쇼핑하기</Button>
      </div>
    );
  }
}

export default withStyles(styles)(OrderSuccess);