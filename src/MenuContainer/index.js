import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import {Redirect, useHistory } from 'react-router-dom';



export default class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state =  { 
      activeItem: 'logout',
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

// onClick(){
//     window.location.href="/routes/all/";
//     this.setState({
//       loggedIn: true
//     })
// }

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


        <Button name="logout" className="logout" onClick={this.props.logout}>Logout</Button>
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