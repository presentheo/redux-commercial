import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function ProductDetail(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <img src={props.productData.cover} alt="z"></img>
        <Typography variant="h5" component="h3">
          {props.productData.name}
        </Typography>
        <Typography component="p">
        </Typography>
        <p>lorem ipsum</p>
      </Paper>
    </div>
  );
}

// ProductDetail.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ProductDetail);