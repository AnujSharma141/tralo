import React from 'react'
import {Flex, Avatar, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <Flex zIndex='3' mt='2vw' justify='flex-end' mr='2vw'>  
    <Menu w='10vw'  zIndex='3'>
    <MenuButton  zIndex='3'>
    <Avatar  zIndex='3' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </MenuButton>
    <MenuList fontFamily='inter' justifyContent='flex-end'  fontSize='1vw' zIndex='3'>
        <Link to='/app'><MenuItem>Explore</MenuItem></Link> 
        <Link to='/post'><MenuItem>Post</MenuItem></Link> 
        <Link to='/listings'><MenuItem>Listings</MenuItem></Link> 
        <Link to='/app'><MenuItem onClick={()=>props.logout()}>Log Out </MenuItem></Link> 
    </MenuList>
    </Menu>
    </Flex>
  )
}
