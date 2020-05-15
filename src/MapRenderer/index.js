import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Item } from 'semantic-ui-react'
import '../App.css';
import RouteContainer from '../RouteContainer'



const mapStyles = 
   {
    top: 100,
    left: 50,
    width: '60%',
    height: '60%'
  }



function MapRenderer(props) {

  console.log("Here are the props in MapRenderer(includes markers but does not specify which route we want to see):")
  console.log(props)
  // console.log(props.routeToGet.data.id)
  console.log("Here is the routeToGet from MapRenderer (does not include markers):")
  console.log(props.routeToGet) //THIS IS THE ROUTE YOU WANT TO LOOP THRU!!!
  console.log(props.routeToGet.marker[0].latitude)
  // console.log(props.routeToGet.data.comments)
  // const route_id = props.routeToGet.data.id
  // console.log(route_id)
//since its a list you need a second loop
//change key to amrkerS, bevause its a liost of MARKERS

  const markers = props.markers.map(marker => {
    return (
     <Marker 
      key={marker.id}
      position={{lat: marker.latitude, lng: marker.longitude }}
     
      />
      
    )
  }) 





      return (
        <Map 
        style={mapStyles}
        className= "map-style"
        google={props.google} 
        initialCenter={{lat: 42.9634, lng: -85.6681 }}
        zoom={6}>

          {markers}
        </Map>
      )

}




export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
})(MapRenderer);







