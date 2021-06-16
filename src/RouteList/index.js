import React from 'react'
import { Button, Item, Rating, Icon } from 'semantic-ui-react'
import StackGrid from "react-stack-grid";
import '../App.css'


export default function RouteList(props) {


  console.log("Here is props.routeToGet & props in /RouteList:")
  console.log(props.routeToGet)
  console.log(props)
  

  const routes = props.routes.map(route => {
    return (
     <StackGrid 
      className="routeList"
      key={route.id}
      columnWidth={1050}
      paddingbottom={300}

      >
        <Item.Group  className="items" relaxed>
          <Item >
          <Item.Image className={"imageThumbnail"} style={{display: 'flex', alignItems: 'center', borderRadius: 40/ 2}} size='medium' src={route.images} alt={''}/>
            <Item.Content verticalAlign='middle'>
              <Item.Header>{route.location}</Item.Header>
        
                  <br/>
                  <br/>
              <Item.Description style={{fontWeight: 'bold'}} align={'left'}>
              Skill Level: <Rating maxRating="5" rating={route.skill_level} disabled/>
              </Item.Description>
              <Item.Description style={{marginRight: 130}} align="left">{route.comments}</Item.Description>
              <Item.Extra align="left">Length: {route.length} miles</Item.Extra>
              <Item.Extra align="left">More Info: {route.user_id.email}</Item.Extra>
              
              { route.user_id.email == props.email &&
              
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

              }

              <Item.Extra>
                <Button 
                  floated='right'
                  onClick={ () => props.getRoute(route.id) }
                  >See Map
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


