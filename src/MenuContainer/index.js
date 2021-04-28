import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import {Redirect, useHistory } from 'react-router-dom';



export default class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state =  { 
      activeItem: 'logout',
      loggedIn: false
    }
  }



handleItemClick = (event, { name }) => this.setState({ activeItem: name })





render(props) {
  console.log("Here is this.props in MenuContainer:")
  console.log(this.props)
    const { activeItem } = this.state
    return (

      <Menu secondary>
        <Menu.Item>
        {this.props.email} 
        </Menu.Item>


        <Button name="logout" className="logout" onClick={this.props.logout}>Logout</Button>
      </Menu>
    )
  }
}


        // <Menu.Item
        //   name='about'
        //   active={activeItem === 'about'}
        //   onClick={this.props.about}
        // />
