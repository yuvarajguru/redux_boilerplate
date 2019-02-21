import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux';

import Post from './Components/Post';
import Postform from './Components/Postform';

import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider  store ={store}>
      <div>
        <Postform/>
        <hr/>
        <Post/>
        
      </div>
      </Provider>
    );
  }
}

export default App;