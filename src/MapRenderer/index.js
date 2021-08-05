
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Button, Icon, Modal, Header, Image, Rating } from 'semantic-ui-react'
import '../App.css'






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


//in regards to the &nbsp; --> condition so that only one space depending on length of comment

    return(
   
      <div>

        <Map 
          // style={mapStyles}
          className= "mapStyle"
          google={props.google} 
          initialCenter={{lat: 42.4031, lng: -86.2736 }}
          zoom={6}>
            {markers}
        </Map>
            
        <div className="mapDiv" style={{borderRadius: 13/ 2}}>
          <div className="mapDivP" style={{fontWeight: 'bold'}}>
            <p>ABOUT</p> 
            <h4>{props.routeToGet.location}</h4>
            Skill Level: <Rating maxRating="5" rating={props.routeToGet.skill_level} disabled/>
            
            <h5>{props.routeToGet.comments}</h5>
            <h5>{props.routeToGet.length} miles</h5>
          </div>
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

