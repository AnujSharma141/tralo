import React from 'react'
import { Box, Card, Center, Flex, Input, Image, Heading, Text, Button, Avatar, MenuButton, Menu, MenuList, MenuItem, CloseButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function ProprtyView({view,close}) {
  return (
    <Box className="property-box">
      <Image src={view.data.url} alt={view.data.name} className="property-image" />
      <Box className="property-details">
        <Text className="property-title">{view.data.name}</Text>
        <Text className="property-info"><p>{view.data.property} BHK</p> <p> {view.data.area} sq ft</p></Text>
        <Text className="property-listed-by">listed by</Text>
        <Text className="property-owner-info">{view.data.owner.name}</Text>
        {/* <Text className="property-owner-info">{view.data.owner.mail}</Text>
        <Text className="property-owner-info">+91 {view.data.owner.contact}</Text> */}
        <Link to={'mailto:'+view.data.owner.mail}><Button className='button-primary'>Schedule Tour</Button></Link>
      </Box>
      <CloseButton className="close-button" onClick={() => close({ status: false, data: null })} />
        
    </Box>

  )
}
