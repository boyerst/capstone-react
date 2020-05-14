import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Item } from 'semantic-ui-react'
import '../App.css';



const mapStyles = 
   {
    top: 100,
    left: 50,
    width: '60%',
    height: '60%'
  }



function MapRenderer(props) {

  console.log("Here are the props in MapRenderer:")
  console.log(props)

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
      zoom={14}>


        {markers}
      </Map>
  )
}




export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
})(MapRenderer);







