import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function ProductCard(props) {
  const { classes, name, price, onAddToCart } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary"
          onClick={() => onAddToCart({name:name, price:price})}>
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(ProductCard);

