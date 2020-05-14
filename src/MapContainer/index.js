
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import CurrentLocation from './Map.js';
import RouteShow from '../RouteShow'
import NewMarkersForm from '../NewMarkersForm'

// import RouteContainer from '../RouteContainer'
// import { Form, Button, Segment, Modal, Header, Rating, Icon } from 'semantic-ui-react'





const mapStyles = {
  width: '60%',
  height: '60%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

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



//this will appear when user hits button in menu bar???
  render() {
    console.log("Here is this.state from render() in MapContainer")
    console.log(this.state)
    return (
      <React.Fragment>
        <h2>MapContainer: pass route data into here? Then can post route info and place markers on map from MapContainer?</h2>
        <p>Hello</p>



        <NewMarkersForm createMarker={this.createMarker}/>


        <CurrentLocation

          centerAroundCurrentLocation
          google={this.props.google}>
          <Marker onClick={this.onMarkerClick} name={'current location'} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>

      </React.Fragment>
     
      // ABOVE: </MarkerMapShowContainer this.state.markers>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
})(MapContainer);


