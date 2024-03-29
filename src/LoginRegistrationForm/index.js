import React, { Component } from 'react'
import { Form, Button, Grid, Segment, Message } from 'semantic-ui-react'

export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      action: 'Login'
    }
  }

  changeForm = () => {
    if(this.state.action==="Login"){
      this.setState({action: "Register"})
    } else {
      this.setState({action: "Login"})
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`LoginRegForm/index.js: You are attempting to ${this.state.action.toLowerCase()} with these inputs`)
    console.log(this.state);
    if(this.state.action === "Register") {
      this.props.register(this.state)
    } else {
      this.props.login(this.state)
    }
  }

  render() {
    return (
      <Grid className="login" 
        style={{  
          backgroundImage: "url(" + "https://i.imgur.com/g0MN00E.png" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Grid 
          style={{
            top: 250,
            left: 800,
            alignItems: 'center',
            justifyContent: 'center',
            height: 1250,
            width: 390,
            borderRadius: 90,
            padding: 15,
            // marginBottom: 250
          }}>
          <Segment 
            style={{
              top:-60,
              left: 350,
              padding: 7
            }}
          >
            <Form 
              onSubmit={this.handleSubmit}>
              {this.state.action==="Register"
              &&
              <Form.Input 
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              }
              <Form.Input 
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Input 
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button positive  type= "Submit" fluid>
                {this.state.action==="Login" ? "Log In": "Register"}
              </Button>
            
            </Form>
          </Segment>
          <Message
            style={{
              top:-540,
              left: 350,
              padding: 6,
              margin: 15,

            }}
          >
          {
            this.state.action==="Login"
            ?
          <Message 
            style={{
              padding: 8,
              margin: 1
            }}
          >
          Need an account? <span className="link" onClick={this.changeForm}>Register</span>
          </Message> 
          :
          <Message
           style={{
              padding: 8,
              margin: 3
            }}
          >
          Already registered? <span className="link" onClick={this.changeForm}>Log In</span>
          </Message>
            }
          </Message>
        </Grid>

      </Grid>      
    )
  }
} 



