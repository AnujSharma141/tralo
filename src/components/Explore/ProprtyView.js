import React from 'react'
import { Box, Card, Center, Flex, Input, Image, Heading, Text, Button, Avatar, MenuButton, Menu, MenuList, MenuItem, CloseButton } from '@chakra-ui/react'


export default function ProprtyView({view,close}) {
  return (
    <Box className="property-box">
      <Image src={view.data.url} alt={view.data.name} className="property-image" />
      <Box className="property-details">
        <Text className="property-title">{view.data.name}</Text>
        <Text className="property-info">{view.data.property} BHK. {view.data.area} sq ft.</Text>
        <Text className="property-listed-by">listed by</Text>
        <Text className="property-owner-info">{view.data.owner.name}</Text>
        <Text className="property-owner-info">{view.data.owner.mail}</Text>
        <Text className="property-owner-info">+91 {view.data.owner.contact}</Text>
      </Box>
      <CloseButton className="close-button" onClick={() => close({ status: false, data: null })} />
        
    </Box>

  )
}
