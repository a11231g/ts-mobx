import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import stores from './src/store'
import AppNavigator from './src/navigators/AppNavigator';

console.disableYellowBox = true;

class App extends Component {

  public render() {
    return (
      <Provider {...stores}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default App;
