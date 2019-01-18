import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
      <Link to={`/detail/${props.product.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`/redux-record/images/cover-${props.product.id}.jpg`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline">
              {props.product.name}
            </Typography>
            <Typography variant="subtitle2">
              {props.product.creator}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default withStyles(styles)(ProductCard);

