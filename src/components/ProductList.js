import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ProductList extends Component {

  render() {
    const mapToComponent = (data) => {
      return data.map((item, index) => {
        return (
          <Grid
            item xs={2}
            key={index}>
            <Paper>
              <ProductCard
                name={item.name}
                price={item.price}
                onAddToCart={this.props.onAddToCart}/>
            </Paper>
          </Grid>
        )
      }) 
    }
    return (
      <ul className='product-list'>
        <Grid container spacing={24}>
          {mapToComponent(this.props.productData)}
        </Grid>
      </ul>
    );
  }
}

export default withStyles(styles)(ProductList);
