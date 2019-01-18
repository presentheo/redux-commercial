import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  pageTitle: {
    margin: 30,
    marginTop: 50
  },
  orderListWrap: {
    margin: 30
  },
  table: {
    minWidth: 700,
  },
  cover: {
    display: 'table-cell'
  },
  info: {
    display: 'table-cell',
    paddingLeft: 20,
    verticalAlign: 'middle'
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10
  },
  creator: {
    fontSize: 14,
    color: '#aaa'
  },
  orderButton: {
    display: 'block',
    margin: 'auto'
  }
});

class Order extends Component {


  render() {
    const {classes} = this.props;

    const getSum = () => {
      let sum = 0;
      this.props.cartData.map(e => {return sum += e.price;})
      return sum;
    }

    return (
      <div>
        <Typography className={classes.pageTitle} variant="h4">주문서 작성</Typography>
        <Paper className={classes.orderListWrap}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>상품정보</TableCell>
              <TableCell>가격</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.cartData.map((item) => {
              return <TableRow>
                <TableCell>
                  <Link to={`/detail/${item.id}`}>
                    <Avatar className={classes.cover} src={`/redux-record/images/cover-${item.id}.jpg`}/>
                    <div className={classes.info}>
                      <span className={classes.name}>{item.name}</span>
                      <span className={classes.creator}>{item.creator}</span>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            })}
            <TableRow>
              <TableCell>합계</TableCell>
              <TableCell>{getSum()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <div>
        <Button 
          className={classes.orderButton}
          size="large"
          variant="contained"
          color="primary">주문하기</Button>
      </div>

      </div>
    );
  }
}

export default withStyles(styles)(Order);