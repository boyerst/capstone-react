import React, { Component } from 'react'
import RouteList from '../RouteList'
import Markers from '../Markers'
import NewRouteForm from '../NewRouteForm'


export default class RouteContainer extends Component {

  constructor() {
    super()
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



  render() {
    console.log("here is this.state in render() in RouteContainer");
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
