import React, { Component } from 'react';
import {View, Text}  from 'react-native';
import Product from './src/screens/Products/Products';
import { Provider } from 'mobx-react'
import stores from './src/store'

console.disableYellowBox = true;

class App extends Component {


  public render() {
    return (
            <Product {...stores} />
    );
  }
}

export default App;