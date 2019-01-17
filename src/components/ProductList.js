import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

// const styles = (theme) => ({
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }
// });

class ProductList extends Component {

  render() {
    const mapToComponent = (data) => {
      return data.map((item, index) => {
        return (
          <Grid
            key={index}
            item xs={12} sm={6} md={3}>
              <ProductCard
                id={index}
                product={item}
                onAddToCart={this.props.onAddToCart}/>
          </Grid>
        )
      }) 
    }
    return (
      <ul className='product-list' style={{padding: 30}}>
        <Grid container spacing={16}>
          {mapToComponent(this.props.productData)}
        </Grid>
      </ul>
    );
  }
}

export default ProductList;
// export default withStyles(styles)(ProductList);
