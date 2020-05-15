
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Style } from 'google-maps-react';
import CurrentLocation from './Map.js';
// import RouteShow from '../RouteShow'
import NewMarkerForm from '../NewMarkerForm'
import MapRenderer from '../MapRenderer'
import '../App.css'

// import RouteContainer from '../RouteContainer'
// import { Form, Button, Segment, Modal, Header, Rating, Icon } from 'semantic-ui-react'





export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
//add idOfRouteToGet here to pass down to MapRenderer?:

      position: [],
      markers: [],
      showingInfoWindow: false,       // hides or the shows the infoWindow
      activeMarker: {},          //shows the active marker when clicked
      selectedPlace: {}          //shows infoWindow fo selected place/ marker
    };
  }



  componentDidMount() {
    // get the markers when this component is first rendered
    this.getMarkers()
  }




  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  getMarkers = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/markers/all"
      console.log("Trying to fetch data from:");
      console.log(url);
      const markersResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("Here is the Response from the fetch call:");
      console.log(markersResponse);
      const markersJson = await markersResponse.json()
      console.log("Here is the data we got in getMarkers in MapContainer:");
      console.log(markersJson);
      this.setState({
        markers: markersJson
      })
    } catch(err) {
      console.error("Error getting marker data.", err)
    }
  }

  createMarker = async (markerToAdd) => {
  console.log("Here is the marker you are trying to create:")
  console.log(markerToAdd)
  try {
    const url = process.env.REACT_APP_API_URL + "/api/v1/markers/"

    const createMarkerResponse = await fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(markerToAdd) //error here because decimal? 
    })
    const createMarkerJson = await createMarkerResponse.json()
    console.log("Here is the result of createMarker:")
    console.log(createMarkerJson)

    if(createMarkerResponse.status === 201) {
      const markers = this.state.markers
      markers.push(createMarkerJson.data)
      this.setState({
        markers: markers
      })
    }
    } catch (error){
      console.log(error)
      console.log("There was an error creating the Marker")
    }
  }






  render() {

    console.log("Here is this.state from render() in MapContainer")
    console.log(this.state)


    return(
      
      <React.Fragment>

        <NewMarkerForm createMarker={this.createMarker}/>
        <MapRenderer  routeToGet={this.props.routeToGet} markers={this.state.markers}/>
      </React.Fragment>
    )
  }
}

export default MapContainer
////////////////////////////////////////////////////////////////////////////
//   render() {
//     console.log("Here is this.state from render() in MapContainer")
//     console.log(this.state)
//         return (
//       <React.Fragment>
//         <h2>MapContainer: pass route data into here? Then can post route info and place markers on map from MapContainer?</h2>
//         <p>Hello</p>
//           <Map
//             google={this.props.google}
//             zoom={14}
           
            
//           >
//           <Marker
//             position={{ lat: 41.8781, lng: -87.6298 }}
//             onClick={this.onMarkerClick}
//             name={'Plug in name props here'}
//           />
//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//             onClose={this.onClose}
//           >
//             <div>
//               <h4>{this.state.selectedPlace.name}</h4>
//             </div>
//           </InfoWindow>
//         </Map>


//         <NewMarkersForm createMarker={this.createMarker}/>




//       </React.Fragment>
     

    // );
  // }
// }


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
// })(MapContainer);

/////////////////////////////////////////////////////////////////////////////////////////
