import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

class Header extends Component {
  render() {
    return (
      <AppBar>
        <header>
          <span>{this.props.count}</span>
        </header>
      </AppBar>
    );
  }
}

export default Header;