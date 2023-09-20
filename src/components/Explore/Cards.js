import React from 'react'
import { Box, Card, Center, Flex, Input, Image, Heading, Text, Button, Avatar, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react'

export default function Cards(props) {
    const focus = (item) =>{
        props.center({lat: item.coordinates.lat - 0.0050, long: item.coordinates.long})
        props.zoom(14)
        props.select({status: true, data: item})
    } 
  return (
    <Box className="cards-container">
    <Flex className="cards-flex">
      {props.list.map((item, index) => (
        <Card key={index} className="card-element">
          <Image src={item.url} alt={item.name} className="card-image" />
          <Box className="card-details">
            <Text className="card-title">{item.name}</Text>
            <Text className="card-price">from Rs {item.price}</Text>
            <Flex className="card-info" >
              <Text>{item.city}, {item.state}</Text>
              <Text>{item.property} BHK</Text>
              <Text>{item.area} sq ft</Text>
            </Flex>
            <Button onClick={() => focus(item)} className="view-button button-primary">View</Button>
          </Box>
        </Card>
      ))}
    </Flex>
  </Box>

  )
}
