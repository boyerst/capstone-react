import React from 'react'
import { Button, Item, Rating, Icon } from 'semantic-ui-react'
import StackGrid from "react-stack-grid";

export default function RouteList(props) {

  console.log("Here are the props in RouteList:")
  console.log(props)

  const routes = props.routes.map(route => {
    return (
     
     <StackGrid 
      key={route.id}
      columnWidth={850}
      >
        <Item.Group relaxed>
          <Item>
            <Item.Image style={{display: 'flex', alignItems: 'center'}}size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Item.Content verticalAlign='middle'>
              <Item.Header>{route.location}</Item.Header>
                  <br/>
                  <br/>
              <Rating icon="star" maxRating="5" rating={route.skill_level} disabled/>
              <Item.Description style={{marginRight: 130}} align="left">{route.comments}</Item.Description>
              <Item.Extra align="left">{route.length}</Item.Extra>
              <Button.Group style={{position: 'absolute', right: 0, bottom: 150}}>
                <Button 
                  icon="delete"
                  color='red' 
                  size="mini"
                  inverted
                  onClick={ () => props.deleteRoute(route.id) }
                >
                </Button>
                <Button.Or />
                <Button 
                  icon="edit outline"
                  color='green' 
                  size="mini"
                  inverted
                  onClick={ () => props.editRoute(route.id) }
                >
                </Button>
              </Button.Group>
              <Item.Extra>
                <Button 
                  floated='right'
                  onClick={ () => props.getRoute(route.id) }
                  >See More
                </Button> 
              </Item.Extra>
            </Item.Content>
          </Item>
    </Item.Group>
    </StackGrid>


   
    )
  }) 
  return (
    <Item.Group>
      {routes}
    </Item.Group>
  )
}


