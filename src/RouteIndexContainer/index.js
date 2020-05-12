import React, { Component } from 'react'
import RouteList from '../RouteList'
import Markers from '../Markers'
import NewRouteForm from '../NewRouteForm'


export default class RouteIndexContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: []
    }

  }
  

  componentDidMount() {
    this.getRoutes()
  }

  getRoutes = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/routes/"
      console.log("Trying to fetch data from:");
      console.log(url);
      const routesResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("Here is the Response from the fetch call:");
      console.log(routesResponse);
      const routesJson = await routesResponse.json()
      console.log("Here is the data we got in getRoutes in RouteContainer:");
      console.log(routesJson);
      this.setState({
        routes:routesJson.data
      })
    } catch(err) {
      console.error("Error getting route data.", err)
    }
  }

    createRoute = async (routeToAdd) => {
    console.log("Here is the route you are trying to create:")
    console.log(routeToAdd)
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/routes/"

      const createRouteResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(routeToAdd)
      })
      const createRouteJson = await createRouteResponse.json()
      console.log("Here is the result of createRoute:")
      console.log(createRouteJson)

      if(createRouteResponse.status === 201) {
        const routes = this.state.routes
        routes.push(createRouteJson.data)
        this.setState({
          routes: routes
        })
        }
    } catch (error){
      console.log(error)
      console.log("There was an error creating the Route")
    }
  }









  render() {
    console.log("Here is this.state in render() in RouteContainer");
    console.log(this.state);

    return(
      <React.Fragment>
        <h2>Page for Routes Preview index</h2>
        <NewRouteForm createRoute={this.createRoute}/>
        <RouteList routes={this.state.routes} />
        <Markers markers={this.state.markers} />
      </React.Fragment>
    )
  }

}
