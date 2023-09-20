import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

import branding from '../assets/img/branding.png'
import { Link } from 'react-router-dom'
import NavMenu from '../core/Menu'

export default function Dashboard(props) {
  return (
    
    <Box className='app-layout'>
    <Flex className='app-nav'>
    <Link to='/'><Image className='app-nav-logo' src={branding} /></Link>
    <NavMenu logout={props.logout} />
    </Flex>

    {props.component}
    </Box>
    
  )
}
