import React, { Component } from 'react'
import { Form, Button, Icon, Segment, Header, Rating, Modal } from 'semantic-ui-react'

export default class NewRouteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location:'',
      length: '',                            
      skill_level: '',
      comments: '',
      modalOpen: false

    }
  }





  render() {
  return(
    <Modal 
    primary
    className="createRoute"
    basic size= "large" 
    trigger={<Button onClick={this.handleOpen}>Add New Route</Button>}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    >
      <Header>
        <h3>Add New Route</h3>
      </Header>
        <Modal.Content>
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name="name"
                type="text"
                fluid icon="user"
                iconPosition="left"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <Form.Input
                name="address"
                type="text"
                fluid icon="address book"
                iconPosition="left"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <Form.Input
                name="zip_code"
                type="text"
                fluid icon="map marker alternate"
                iconPosition="left"
                placeholder="Zip Code"
                value={this.state.zip_code}
                onChange={this.handleChange}
              />
                <Form.Input
                name="recommendations"
                type="text"
                fluid icon="food"
                iconPosition="left"
                placeholder="Recommendations"
                value={this.state.recommendations}
                onChange={this.handleChange}
              />
              <Form.Input>
                Rating: 
                <Rating 
                  icon="star" 
                  maxRating={5} 
                  onRate={this.handleRate} 
                  defaultRating={0} 
                />
              </Form.Input>
              
             
            </Form>
          </Segment>
        </Modal.Content>
    </Modal>
    );
  }
}
