import React from 'react';
import { Link } from 'react-router-dom';
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
  button: {
    marginRight: 10
  }
};

function ProductCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Link to={`/detail/${props.id}`}>
        <CardActionArea
          onClick={props.onSelectItem}>
          <CardMedia
            className={classes.media}
            image={props.product.cover}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {props.product.name}
            </Typography>
            <Typography component="p">
              {props.product.creator}
            </Typography>
            <Typography component="p">
              {props.product.price+'원'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button 
            size="small" 
            color="primary"
            onClick={() => props.onAddToCart(props)}>
            장바구니에 담기
          </Button>
          <Button 
            size="small" 
            color="primary">
            바로 구매
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default withStyles(styles)(ProductCard);

