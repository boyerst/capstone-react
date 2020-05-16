import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Item, Grid, Segment, Rail } from 'semantic-ui-react'
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

  const routes = props.routeToGet.marker
  console.log("Here are the props in MapRenderer from /markers/all:")
  console.log(props)

  console.log("Here is the routeToGet from MapRenderer:")
  console.log(props.routeToGet) 


  // const markers_arr = 
  const markers = props.routeToGet.marker.map(marker => {
    return(
      <Marker key={marker.id}
      position={{lat: marker.latitude, lng: marker.longitude}}
      />
    )
  })



  // const markers = props.markers.map(marker => {
  //   return (
  //    <Marker 
  //     key={marker.id}
  //     position={{lat: marker.latitude, lng: marker.longitude }}
     
  //     />
      
  //   )
  // }) 

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

    // return (
    // <Segment>
    // <Grid centered columns={3}>
    //   <Grid.Column>
    //     <Segment>
     

    //       <Rail dividing position='left'>
    //         <Segment>Left Rail Content</Segment>
    //       </Rail>

    //       <Rail dividing position='right'>
    //         <Segment>Right Rail Content</Segment>
    //       </Rail>
    //     </Segment>
    //   </Grid.Column>
    // </Grid>
    // </Segment>
    // )
    // return(
    //   <React.Fragment>
    //   <InfoWindow>
    //       marker={this.state.activeMarker}
    //       visible={this.state.showingInfoWindow}
    //       onClose={this.onClose}
    //   </InfoWindow>
    //   </React.Fragment>

    // 
}




export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
})(MapRenderer);







