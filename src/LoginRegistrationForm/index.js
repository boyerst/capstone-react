import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Label>Username:</Label>
          <Form.Input 
            type="text"
            name="username"
            placeholder="Enter a username"
            value={this.state.username}
          />
          <Label>Email:</Label>
          <Form.Input 
            type="text"
            name="username"
            placeholder="Enter a username"
            value={this.state.username}
          />
          <Label>Password:</Label>
          <Form.Input 
            type="text"
            name="username"
            placeholder="Enter a username"
            value={this.state.username}
          />
          <Button type="Submit">Log In</Button>
        </Form>
      </React.Fragment>      
    )
  }
} 