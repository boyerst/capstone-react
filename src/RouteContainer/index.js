import React, { Component } from 'react'


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
      console.log("trying to fetch data from:");
      console.log(url);
      const routesResponse = await fetch(url)
      console.log("here is the Response from the fetch call:");
      console.log(routesResponse);
      const routesJson = await routesResponse.json()
      console.log("here is the data we got in getRoutes in RouteContainer:");
      console.log(routesJson);
    } catch(err) {
      console.error("Error getting route data.", err)
    }
  }



  render() {
    return(
      <h2>Route Container</h2>
    )
  }

}
