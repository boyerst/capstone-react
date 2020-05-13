
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import CurrentLocation from './Map.js';

const mapStyles = {
  width: '60%',
  height: '60%'
};

export class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      markers: [],
      showingInfoWindow: false,       // hides or the shows the infoWindow
      activeMarker: {},          //shows the active marker when clicked
      selectedPlace: {}          //shows infoWindow fo selected place/ marker
    };

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




  render() {
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


