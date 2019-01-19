import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  root: {
    padding: 40
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  caption: {
    marginTop: 20,
    marginBottom: 20,
    whiteSpace: 'pre-wrap'
  },
  mainTitle: {
    marginBottom: 10,
    textIndent: -5
  }
});

class ProductDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }

  handleChange = (e) => {
    this.setState({
      quantity: Number(e.target.value)
    })
  }

  handleAddToCart = (product, quantity) => {
    if (product.stock >= quantity) {
      this.props.onAddToCart(product, quantity)
    } else {
      alert('입력하신 수량이 남은 수량보다 많습니다!')
    }
  }


  setProduct = () => {
    for(let i = 0; i<this.props.productData.length; i++) {
      if (this.props.productData[i].id === this.props.match.params.id) {
        return this.props.productData[i];
      }
    }
  }

  render() {
    const product = this.setProduct();
    const {classes} = this.props;

    return (
      <div>
        <Grid className={classes.root} container spacing={24}>
          <Grid item xs={5}>
            <img 
              src={`/redux-record/images/cover-${product.id}.jpg`} 
              style={{'width' : '100%'}} 
              alt="z"></img>
          </Grid>
          <Grid item xs={7}>
            <Typography className={classes.mainTitle} variant="h3">
              {product.name}
            </Typography>
            <Typography variant='h6'>
              {product.creator}
            </Typography>
            <Typography className={classes.caption} variant="body2">
              {product.comment}
            </Typography>
            <TextField
              value={this.state.quantity}
              onChange={e => this.handleChange(e)}
              label="수량"
              type="number"
              margin="normal"/>
            <div>
              <Button 
                onClick={() => this.handleAddToCart(product, this.state.quantity)}
                className={classes.button} 
                variant='contained' 
                color="primary">장바구니에 담기</Button>
              <Button 
                onClick={() => this.handleAddToCart(product, this.state.quantity)}
                component={Link}
                to="/order"
                className={classes.button} 
                variant='contained' 
                color="primary">바로 구매</Button>
            </div>
            <p>
              {`남은 수량 : ${product.stock}`}
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetail);