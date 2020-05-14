import React, { Component } from 'react'
import RouteList from '../RouteList'
import MapContainer from '../MapContainer'
import NewRouteForm from '../NewRouteForm'
import EditRouteForm from '../EditRouteForm'
// import RouteShow from '../RouteShow'
import { Link } from 'semantic-ui-react'

export default class RouteContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      idOfRouteToEdit: -1,
      idOfRouteToGet: -1
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



  getRoute = async (idOfRouteToGet) => {
    console.log("you are trying to get route with id: ", idOfRouteToGet)
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/routes/" + idOfRouteToGet
      console.log("Trying to fetch data from:");
      console.log(url);
      const routeResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("Here is the Response from the fetch call:");
      console.log(routeResponse);
      const routeJson = await routeResponse.json()
      console.log("Here is the data we got in getRoutes() in RouteContainer:");
      console.log(routeJson);
      this.setState({
        idOfRouteToGet: idOfRouteToGet
   
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



  editRoute = async (idOfRouteToEdit) => {
    console.log("Here is the Route you are trying to edit:", idOfRouteToEdit)
    this.setState({
      idOfRouteToEdit: idOfRouteToEdit
    })
  }





  updateRoute = async (updatedRouteInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/routes/" + this.state.idOfRouteToEdit
    try {
      const updatedRouteResponse = await fetch(url, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(updatedRouteInfo), 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("updatedRouteResponse", updatedRouteResponse)
      const updatedRouteJson = await updatedRouteResponse.json()
      console.log("updatedRouteJson", updatedRouteJson);
      if(updatedRouteResponse.status == 200) {
        const routes = this.state.routes
        const indexOfRouteBeingUpdated = routes.findIndex(route => route.id == this.state.idOfRouteToEdit)
        routes[indexOfRouteBeingUpdated] = updatedRouteJson.data
        this.setState({
          routes: routes,
          idOfRouteToEdit: -1
        })
      }
     

    } catch(error) {
      console.error("There was an error updating the Route")
      console.error(error)
    }


  }


  deleteRoute = async (idOfRouteToDelete) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/routes/" + idOfRouteToDelete
    try {
      const deleteRouteResponse = await fetch(url, {
        credentials: 'include',
        method: 'DELETE'
      })
      console.log("deleteRouteResponse", deleteRouteResponse)
      const deleteRouteJson = await deleteRouteResponse.json()
      console.log("deleteRouteJson", deleteRouteJson)
      this.setState({
        routes: this.state.routes.filter(route => route.id != idOfRouteToDelete)
      })

    } catch (error) {
      console.log("There was an error deleting the Route")
      console.log(error)
    }
  }





  render() {
    console.log("Here is this.state in render() in RouteContainer");
    console.log(this.state);

    return(
      <React.Fragment>
        <h2>WMATracks</h2>
        <NewRouteForm 
          createRoute={this.createRoute}
          //this is on the main page: it opens as a modal
          />
        {
        this.state.idOfRouteToGet === -1
        ? //if true
        <RouteList 
          //this is always on the main page
          routes={this.state.routes} 
          editRoute={this.editRoute}
          deleteRoute={this.deleteRoute}
          getRoute={this.getRoute}
          />
        : //if not
        <div>
          
        
          
        
          <MapContainer routes={this.state.routes} />
         <a style={{float: "right"}} onClick={event =>  window.location.href='/routes'}>Back To All Routes</a>
        </div>

        }
        {
          this.state.idOfRouteToEdit !== -1
          &&
        <EditRouteForm 
          // this is one the main page: it conditionally opens based on Route index #
          key={this.state.idOfRouteToEdit}
          routeToEdit={this.state.routes.find((route) => route.id === this.state.idOfRouteToEdit)}
          updateRoute={this.updateRoute}
          closeModal={this.closeModal}
        />
        }
        
 
        
        
      </React.Fragment>
    )
  }
}


