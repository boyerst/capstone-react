import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'




export default class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state =  { 
      activeItem: 'about'
    }
  }



handleItemClick = (event, { name }) => this.setState({ activeItem: name })



render(props) {
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Menu.Item>
        {this.props.email} 
        </Menu.Item>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.props.about}
        />
        <Menu.Item
          name='routes'
          active={activeItem === 'routes'}
          // onClick={ () => props.getRoutes(route.id) }
        />
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.props.logout}
        />
      </Menu>
    )
  }
}