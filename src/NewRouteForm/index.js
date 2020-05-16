import React, { Component } from 'react'
import { Form, Button, Icon, Segment, Header, Rating, Modal } from 'semantic-ui-react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


export default class NewRouteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location:'',
      length: '',                            
      skill_level: '',
      images: '',
      comments: '',
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
    this.props.createRoute(this.state) 
    this.setState({
      location: '',
      length: '',
      skill_level: '',
      images: '',
      comments: '',
      modalOpen: false
    })
  }

  handleRate = (event, { rating, maxRating }) =>
    this.setState({ 
      skill_level: rating,
    })





  handleOpen = () => this.setState({ modalOpen: true })
  

  handleUpload = async (event) => {
      const files = event.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'capstone')
      const url = 'https://api.cloudinary.com/v1_1/dkx5qb9go/image/upload'
      const uploadImageRes = await fetch(url, {
        method: 'POST',
        body: data
      })
      const file = await uploadImageRes.json()
      console.log('file', file);
      console.log('file.secure_url', file.secure_url);

      this.setState({
        images: file.secure_url
      })
  }


  render() {
  return(
    <Modal 
    primary="true"
    className="createRoute"
    basic size= "large" 
    trigger={<Button className="new-route" onClick={this.handleOpen}>Add New Route</Button>}
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
                placeholder="Start Point"
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
                // name="images"
                type="file"
                fluid icon="image"
                iconPosition="left"
                // placeholder="Images"
                // value={this.state.images}
                onChange={this.handleUpload}
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
                  name="skill_level"
                  type="rating"
                  maxRating={5} 
                  onRate={this.handleRate} 
                  defaultRating={0} 
                />
              </Form.Input>
              <br/>
                <Modal.Actions>
                <Button 
                  type= "Submit" 
                  color="green" 
                  onClick={this.handleClose}>
                    <Icon name='plus' />
                  Add Route
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
