import React from 'react';
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
    marginBottom: 20
  },
  mainTitle: {
    marginBottom: 10,
    textIndent: -5
  }
});

function ProductDetail(props) {
  const { classes } = props;

  const product = props.productData[props.match.params.id];

  return (
    <div>
      <Grid className={classes.root} container spacing={24}>
        <Grid item xs={5}>
          <img src={product.cover} style={{'width' : '100%'}} alt="z"></img>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.mainTitle} variant="h3">
            {product.name}
          </Typography>
          <Typography variant='h6'>
            {product.creator}
          </Typography>
          <p className={classes.caption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis nostrum fugiat magni, explicabo accusamus perspiciatis ipsum quos officia ea, unde iste suscipit, corrupti veniam error excepturi asperiores aspernatur quam.</p>
          <div>
            <Button 
              onClick={() => props.onAddToCart(product)}
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

// ProductDetail.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ProductDetail);