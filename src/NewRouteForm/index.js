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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


   
  handleOpen = () => this.setState({ modalOpen: true })


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
                value={this.state.address}
                onChange={this.handleChange}
              />
              <Form.Input
                name="comments"
                type="text"
                fluid icon="comment alternate outline"
                iconPosition="left"
                placeholder="Comments"
                value={this.state.zip_code}
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
              
             
            </Form>
          </Segment>
        </Modal.Content>
    </Modal>
    );
  }
}
