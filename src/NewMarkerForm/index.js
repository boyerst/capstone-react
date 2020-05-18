import React, { Component } from 'react'
import { Form, Button, Icon, Segment, Header, Modal } from 'semantic-ui-react'
import '../App.css';


export default class NewMarkerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude:'',
      longitude: '',                            
      description: '',
      modalOpen: false

    }
  }




  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createMarker(this.state) 
    this.setState({
      latitude:'',
      longitude: '',                            
      description: '',
      modalOpen: false
    })
  }



  handleOpen = () => this.setState({ modalOpen: true })







  render(props) {
  return(
    <Modal 
    
    primary="true"
    className="createMarker"
    basic size= "large" 
    trigger={<Button className="newMarker" onClick={this.handleOpen}>Add New Marker</Button>}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    >
      <Header>
        <h3>Add New Marker</h3>
      </Header>
        <Modal.Content>
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name="route_id"
                type="number"
                fluid icon="numbered list"
                iconPosition="left"
                placeholder="Route ID"
                value={this.state.route_id}
                onChange={this.handleChange}
              />
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
                  type= "Submit" 
                  color="green" 
                  onClick={this.handleClose}

                  >
                    <Icon name='plus' />
                  Add Marker
                </Button>
          
                &nbsp;
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
