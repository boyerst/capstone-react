// import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import { Item, Grid, Segment, Rail } from 'semantic-ui-react'
// import '../App.css';
// import RouteContainer from '../RouteContainer'



// const mapStyles = 
//    {
//     top: 100,
//     left: 50,
//     width: '60%',
//     height: '60%'
//   }


// function MapRenderer(props) {

//   const routes = props.routeToGet.marker
//   console.log("Here are the props in MapRenderer from /markers/all:")
//   console.log(props)

//   console.log("Here is the routeToGet from MapRenderer:")
//   console.log(props.routeToGet) 


//   // const markers_arr = 
//   const markers = props.routeToGet.marker.map(marker => {
//     return(
//       <Marker key={marker.id}
//       position={{lat: marker.latitude, lng: marker.longitude}}
//       />
//     )
//   })

//     return (
//       <Map 
//       style={mapStyles}
//       className= "map-style"
//       google={props.google} 
//       initialCenter={{lat: 42.9634, lng: -85.6681 }}
//       zoom={6}>

//         {markers}
//       </Map>
//     )


// }




// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
// })(MapRenderer);




    // return(
    //   <React.Fragment>
    //   <InfoWindow>
    //       marker={this.state.activeMarker}
    //       visible={this.state.showingInfoWindow}
    //       onClose={this.onClose}
    //   </InfoWindow>
    //   </React.Fragment>

    // 

import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Button, Icon, Modal, Header } from 'semantic-ui-react'
import '../App.css';
import RouteContainer from '../RouteContainer'



const mapStyles = 
   {
    top: 100,
    left: 70,
    width: '60%',
    height: '75%'
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




    return(
   
      <div>

        <Map 
          style={mapStyles}
          className= "map-style"
          google={props.google} 
          initialCenter={{lat: 43.7817, lng: -86.4331 }}
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
              <Modal.Content>
                <img style={{display: 'flex', alignItems: 'center'}} size='large' src={props.routeToGet.images} alt={''} />
              </Modal.Content>
          </Modal>
        </div>

      </div>
   
    )

    
}

   //  <Container fluid>

   //      <Rail className="rail" internal position='right'>
         
   //      </Rail>
   // </Container>

          

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
})(MapRenderer);

