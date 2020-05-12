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
  

  register = (registerInfo) => {
    console.log("register() in App.js called with the following info", registerInfo);    
  }

  login = (loginInfo) => {
    console.log("login() in App.js called with the following info", loginInfo);    
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
          <LoginRegistrationForm 
            login={this.login}
            register={this.register}
          />
        }
      </div>
    );    
  }
}
