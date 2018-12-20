import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Drawer from './components/Drawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList></ProductList>
        <Drawer></Drawer>
      </div>
    );
  }
}

export default App;
