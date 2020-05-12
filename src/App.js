import React, { Component } from 'react';
import './App.css';
import RouteContainer from './RouteContainer'
import LoginRegistrationForm from './LoginRegistrationForm'




export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn:false,
      loggedInUserEmail: ''
    }

  }
  




  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <React.Fragment>
          <RouteContainer />
          </React.Fragment>
          :
          <LoginRegistrationForm />
        }
      </div>
    );    
  }
}
