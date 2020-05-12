import React, { Component } from 'react'
import { Form, Button, Grid, Label, Segment, Message } from 'semantic-ui-react'

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

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Segment>
            <Form>
              {this.state.action==="Register"
              &&
                <Form.Input 
                  type="text"
                  name="username"
                  placeholder="Enter a username"
                  value={this.state.username}
                />
              }
           
              <Form.Input 
                type="text"
                name="username"
                placeholder="Enter a username"
                value={this.state.username}
              />
          
              <Form.Input 
                type="text"
                name="username"
                placeholder="Enter a username"
                value={this.state.username}
              />
              <Button type= "Submit" color="grey" fluid size="large">
                {this.state.action==="Login" ? "Log In": "Register"}
              </Button>
            </Form>
            </Segment>
            <Message>
            {
              this.state.action==="Login"
              ?
              <Message>
              Need an account? <span className="link" onClick={this.changeForm}>Register</span>
              </Message> 
              :
              <Message>
              Already registered? <span className="link" onClick={this.changeForm}>Log In</span>
              </Message>
            }
          </Message>
        </Grid.Column>
      </Grid>      
    )
  }
} 