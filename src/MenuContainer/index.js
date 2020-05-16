import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Redirect, useHistory } from 'react-router-dom';



export default class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state =  { 
      activeItem: 'about',
      loggedIn: true
    }
  }



handleItemClick = (event, { name }) => this.setState({ activeItem: name })


// routesPage = () => {
//   return <Redirect to='/routes/all/'/>

// }

// routesPage = () => {
//   getAllRoutes()

// }
  // window.location = 'api/v1/routes'

onClick(){
    window.location.href="/routes/all/";
    this.setState({
      loggedIn: true
    })
}

render(props) {
  console.log(this.props)
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
          onClick={this.onClick}
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


// function home(e) {
//     e.preventDefault();
//     window.location = 'my-app/src/Containers/HomePage.jsx';
// }
// routesPage => (event) = {
//   event => window.location.href='/routes/all'
// }

// <a onClick={event =>  window.location.href='/routes'}>Back To All Routes</a>