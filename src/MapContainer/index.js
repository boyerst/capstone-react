
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import CurrentLocation from './Map.js';

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
    // get the dogs when this component is first rendered
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
        markers:markersJson.data
      })
    } catch(err) {
      console.error("Error getting marker data.", err)
    }
  }


  render() {
    console.log("Here is this.state in render() MapContainer")
    console.log(this.state)
    return (

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjVYq-xdaiveartlS-yx7qMnZeVZogSI0'
})(MapContainer);


