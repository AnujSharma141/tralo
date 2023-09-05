import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

import branding from '../assets/img/branding.png'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
export default function Dashboard(props) {
  return (
    
    <Box bg='#F1F1F1' minH='100vh' w='100vw'>
    <Flex  w='96vw' ml='2vw' align='center' justify='space-between'>
    <Link to='/'><Image mt='2vw' h='2vw' ml='2vw' src={branding} /></Link>
    <Nav logout={props.logout} />
    </Flex>

    {props.component}
    </Box>
    
  )
}
