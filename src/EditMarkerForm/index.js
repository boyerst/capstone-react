import React, { Component } from 'react'
import { Form, Button, Segment, Modal, Header, Rating, Icon } from 'semantic-ui-react'
import '../index.css'

export default class EditMarkerForm extends Component {

  constructor(props) {
    super(props)
    console.log(props.idOfMarkerToEdit)
    console.log(props)
    console.log(props.idOfMarkerToEdit.id)
    console.log(props.idOfMarkerToEdit)
    console.log(props.markerToEdit)

    this.state = {
      // route_id: props.idOfMarkerToEdit.id,
      latitude: props.idOfMarkerToEdit.latitude,
      longitude: props.idOfMarkerToEdit.longitude,                            
      description: props.idOfMarkerToEdit.description,
 
    }
  }



    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.updateMarker(this.state)

    }





  render() {
  console.log(this.props)
    return(
      <Modal   open={true} basic size="small" onClose={this.props.closeModal}>
        <Header>
          <h3>Enter Updated Information</h3>
        </Header>
          <Modal.Content>
            <Segment>
              <Form onSubmit={this.handleSubmit}>
               
              <Form.Input
                name="latitude"
                type="text"
                fluid icon="compass"
                iconPosition="left"
                placeholder="Latitude"
                value={this.state.latitude}
                onChange={this.handleChange}
              />
              <Form.Input
                name="longitude"
                type="text"
                fluid icon="compass outline"
                iconPosition="left"
                placeholder="Longitude"
                value={this.state.longitude}
                onChange={this.handleChange}
              />
              <Form.Input
                name="description"
                type="text"
                fluid icon="compose"
                iconPosition="left"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
                <br/>
                  <Modal.Actions>
                    <Button 
                      type="Submit">
                      Update Marker
                    </Button>
                    <Button 
                      icon="delete"
                      color='red' 
                      size="mini"
                      inverted
                      onClick={ () => this.props.deleteMarker(this.props.idOfMarkerToEdit.id) }
                    >
                    </Button>
                    <Button 
                      color='grey' 
                      onClick={this.handleClose}>
                        <Icon name='undo' /> 
                      Go Back
                    </Button>
                  </Modal.Actions>
              </Form>
            </Segment>
          </Modal.Content>
      </Modal>
      );
    }
}