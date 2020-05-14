// import React from 'react';
// import ReactDOM from 'react-dom';






// import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   map: {
//     position: 'absolute',
//     width: '60%',
//     height: '60%'
//   }
// };


// function GoogleMap(props) {
// console.log("these are the props")
// console.log(props)
//   const markers = props.markers.map((marker)=>{
//       console.log("marker called")
//     return (
//       <Marker key={marker.id}
//         // name={post.date}
//         position={{lat: marker.Latitude, lng: marker.Longitude}}
//         // icon={{
//           // url: "/pngwave.png",
//           // anchor: new google.maps.Point(32,32),
//           // scaledSize: new google.maps.Size(64,64)
//         // }} 
//       />
//     )
//   })
 
//   return (

//     <Map 
//     className= "map"
//     style={mapStyles} 
//     google={props.google} 
//     zoom={12} 
//     initialCenter={{lat: 41.854885, lng: -87.621807 }} >
//     {markers}
//     </Map>
//   )
// }


// export default GoogleApiWrapper(
// (props)=>({
//   apiKey: 'AIzaSyB7G8yZAkGYtf2QQzkS1n0E1gZtpPF_h8w',
//   // LoadingContainer: GoogleMap
// }))(GoogleMap)

























////////////////////////////////////////////////////////////////////////////////////
// export class CurrentLocation extends React.Component {

// constructor(props) {
//     super(props);
//     const { lat, lng } = this.props.initialCenter;
//     this.state = {
    
//       currentLocation: {
//         lat: lat,
//         lng: lng
//       }
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//     if (prevState.currentLocation !== this.state.currentLocation) {
//       this.recenterMap();
//     }
//   }

//   recenterMap() {
//     const map = this.map;
//     const current = this.state.currentLocation;
//     const google = this.props.google;
//     const maps = google.maps;
//     if (map) {
//       let center = new maps.LatLng(current.lat, current.lng);
//       map.panTo(center);
//     }
//   }

//   componentDidMount() {
//     if (this.props.centerAroundCurrentLocation) {
//       if (navigator && navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(pos => {
//           const coords = pos.coords;
//           this.setState({
//             currentLocation: {
//               lat: coords.latitude,
//               lng: coords.longitude
//             },
//           });
//         });
//       }
//     }
//     this.loadMap();
//   }

//   loadMap() {
//     if (this.props && this.props.google) {
//       const { google } = this.props; // checking for goog connection
//       const maps = google.maps;
//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef); //--this is a ref to find the DOM--
//       let { zoom } = this.props;
//       const { lat, lng } = this.state.currentLocation;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign(
//         {},
//         {
//           center: center,
//           zoom: zoom
//         }
//       );
//       this.map = new maps.Map(node, mapConfig); //instnatiates the map
//     }
//   }

//   renderChildren() {
//     const { children } = this.props;
//     if (!children) return;
//     return React.Children.map(children, c => {
//       if (!c) return;
//       return React.cloneElement(c, {
//         map: this.map,
//         google: this.props.google,
//         mapCenter: this.state.currentLocation
//       });
//     });
//   }



//   render() {
//      const style = Object.assign({}, mapStyles.map);
//     return (
//       <div className="map">
//         <div style={style} ref="map">
//           Loading map...
//         </div>
//         {this.renderChildren()}
//       </div>
//     );
//   }
// }




// export default CurrentLocation;
// CurrentLocation.defaultProps = {
//   zoom: 14,
//   initialCenter: {
//     lat: 41.8781,
//     lng: -87.6298
//   },
//   centerAroundCurrentLocation: false,
//   visible: true
// };


