import React, { Component } from 'react'
import { Form, Button, Segment, Modal, Header, Rating, Icon } from 'semantic-ui-react'
import '../index.css'

export default class EditRouteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location:props.routeToEdit.location,
      length: props.routeToEdit.length,                            
      skill_level: props.routeToEdit.skill_level,
      comments: props.routeToEdit.comments
    }
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }




  handleRate = (event, { rating, maxRating }) => {
    this.setState({ rating, maxRating })
  }



render() {
  return(
    <Modal open={true} basic size="small" onClose={this.props.closeModal}>
      <Header>
        <h3>Enter Updated Information</h3>
      </Header>
        <Modal.Content>
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name="location"
                type="text"
                fluid icon="location arrow"
                iconPosition="left"
                placeholder="Location"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <Form.Input
                name="length"
                type="text"
                fluid icon="exchange"
                iconPosition="left"
                placeholder="Length"
                value={this.state.length}
                onChange={this.handleChange}
              />
              <Form.Input
                name="comments"
                type="text"
                fluid icon="comment alternate outline"
                iconPosition="left"
                placeholder="Comments"
                value={this.state.comments}
                onChange={this.handleChange}
              />
              <Form.Input>
                Skill Level: 
                <Rating 
                  icon="star" 
                  maxRating={5} 
                  onRate={this.handleRate} 
                  defaultRating={0} 
                />
              </Form.Input>
              <br/>
                <Modal.Actions>
                  <Button 
                    type="Submit">
                    Update Route
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
