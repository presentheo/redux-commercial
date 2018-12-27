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
    height: 260,
  },
};

function ProductCard(props) {
  const { classes, name, creator, price, onAddToCart } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://static.stereogum.com/uploads/2018/09/queen-bohemian-rhapsody-soundtrack-1536163276-640x640.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {name}
          </Typography>
          <Typography component="p">
            {creator}
          </Typography>
          <Typography component="p">
            {price+' won'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary"
          onClick={() => onAddToCart({name:name, creator:creator, price:price})}>
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(ProductCard);

