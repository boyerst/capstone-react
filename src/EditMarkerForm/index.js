import React, { Component } from 'react'
import { Form, Button, Segment, Modal, Header, Icon } from 'semantic-ui-react'
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
      idOfMarkerToEdit: -1
     
     
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
      this.setState({
        idOfMarkerToEdit: -1
      })

    }

    handleClose = () => {
      this.props.closeModal(this.state)
      }
     


  render() {
    console.log(this.props.markerToEdit.id)
    console.log(this.props.idOfMarkerToEdit.id)
    console.log(this.props)
    console.log(this.props.routeToGet.user_id.email)
    console.log(this.props.email)

    return(
      <Modal   
      open={true} basic size="small" onClose={this.props.closeModal}
      

      >
        <Header>
          <h3>Enter Updated Information</h3>
        </Header>
          <Modal.Content >
          <Modal.Description>
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
                  { 
                    this.props.routeToGet.user_id.email == this.props.email &&

                   <Button.Group style={{position: 'absolute', right: 0, top: 147}}>
                    <Button type="Submit">
                      Update Marker
                    </Button>
                      <Button.Or />
                        <Button 
                          icon="delete"
                          color='red' 
                          size="mini"
                          inverted
                          onClick={ () => this.props.deleteMarker(this.props.idOfMarkerToEdit.id) }
                        >
                        </Button>
                      <Button.Or />
                        <Button 
                          color='grey' 
                          onClick={this.handleClose}>
                            <Icon name='undo' /> 
                        </Button>
                   
                    </Button.Group>
                  }
                  </Modal.Actions>
              </Form>
              {
                this.props.routeToGet.user_id.email !== this.props.email &&
                <Button 
                  style={{position: 'absolute', right: 10, top: 162}}
                  color='grey'
                  onClick={this.handleClose}
                >
                    <Icon name='undo' /> 
                </Button>
              }
            </Segment>
            </Modal.Description>
          </Modal.Content>
      </Modal>
      );
    }
}