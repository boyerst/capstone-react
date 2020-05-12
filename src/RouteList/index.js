import React from 'react'
import { Button, Image, Item, Rating, Grid, Segment } from 'semantic-ui-react'
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
            <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Item.Content verticalAlign='middle'>
              <Item.Header>{route.location}</Item.Header> 
                  <br/>
                  <br/>
              <Rating icon="star" maxRating="5" rating={route.skill_level} disabled/>
              <Item.Description align="left">{route.comments}</Item.Description>
              <Item.Extra align="left">{route.length}</Item.Extra>
              <Item.Extra>
                <Button floated='right'>See More</Button>
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


