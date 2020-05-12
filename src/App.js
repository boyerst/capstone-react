import React, { Component } from 'react';
import './App.css';
import RouteContainer from './RouteContainer'




export default class App extends Component {
  constructor() {
    super()
    this.state = {
      routes: []
    }

  }
  




  render() {
  console.log(process.env)
    return(
      <React.Fragment>
        <RouteContainer />
      </React.Fragment>
    )
  }

}

