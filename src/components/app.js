import React, { Component } from 'react';
import ApiCaller from "./apicaller";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h1>These are the emails</h1>
        <ApiCaller />
      </div>
    );
  }
}


export default App;
