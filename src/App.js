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
  

   register = async (registrationInfo) => {
    console.log("Here is the lifted registration data:", registrationInfo);
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'
    try {
      const registerResponse = await fetch(url, {
        credentials: 'include', 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationInfo),
      })
      console.log("registerResponse", registerResponse)
      const registerJson = await registerResponse.json()
      console.log("registerJson", registerJson)
      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true, 
          loggedInUserEmail: registerJson.data.email
        })
      }
    } catch(error) {
      console.log("Error in registration route")
      console.log(error)
    } 
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
