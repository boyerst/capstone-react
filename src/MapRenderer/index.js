
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Button, Icon, Modal, Header, Image } from 'semantic-ui-react'
import '../App.css';






function MapRenderer(props) {
  // const routes = props.routeToGet.marker
  // console.log("Here are the props in MapRenderer from /markers/all:")
  // console.log(props)
  // console.log("Here is the routeToGet from MapRenderer WHEN WE CLICK ON MARKER:")
  // console.log(props.routeToGet) 

  const markers = props.routeToGet.marker.map(marker => {
    return(
    
      <Marker 
        onClick={ () => props.editMarker(marker)}

        key={marker.id}
        position={{lat: marker.latitude, lng: marker.longitude}}
      />
     
    )
  })




    return(
   
      <div>

        <Map 
          // style={mapStyles}
          className= "mapStyle"
          google={props.google} 
          initialCenter={{lat: 42.4031, lng: -86.2736 }}
          zoom={7}>
            {markers}
        </Map>
            
        <div className="mapDiv">
          <p className="mapDivP">{props.routeToGet.comments}</p>
          <Modal basic size='large'
            trigger={
            <Button className="photoModal"
            >See Photos
            </Button>
            } 
          >
            <Header icon='motorcycle' content={props.routeToGet.location}  />
              <Modal.Content image>
                <Image wrapped size='large' style={{display: 'flex', alignItems: 'center'}} src={props.routeToGet.images} alt={''} />
              </Modal.Content>
          </Modal>
        </div>
      </div>
   
    )

    
}





          

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
})(MapRenderer);

