import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    padding: 40
  },
  button: {
    margin: theme.spacing.unit
  },
  caption: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 1.4,
    whiteSpace: 'pre-wrap'
  },
  mainTitle: {
    marginBottom: 10,
    textIndent: -5
  }
});


class ProductDetail extends Component {
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
            <p className={classes.caption}>
              {product.comment}
            </p>
            <div>
              <Button 
                onClick={() => this.props.onAddToCart(product)}
                className={classes.button} 
                variant='contained' 
                color="primary">장바구니에 담기</Button>
              <Button className={classes.button} variant='contained' color="primary">바로 구매</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetail);