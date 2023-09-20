import React from 'react'
import {Flex, MenuButton, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {IoChevronDownOutline} from 'react-icons/io5'


export default function NavMenu(props) {
  return (
    <Flex zIndex='3' justify='flex-end'>  
    <Menu w='10vw'  zIndex='3'>
    <MenuButton className='nav-menu' bg='white' border='1px solid #ECECEC' as={Button} rightIcon={<IoChevronDownOutline />} zIndex='3'>
    Anuj
    </MenuButton>
    <MenuList fontFamily='inter' justifyContent='flex-end' className='nav-menu-list' zIndex='3'>
        <Link to='/app'><MenuItem>Explore</MenuItem></Link> 
        <Link to='/post'><MenuItem>Post</MenuItem></Link> 
        <Link to='/listings'><MenuItem>Listings</MenuItem></Link> 
        <Link to='/app'><MenuItem onClick={()=>props.logout()}>Log Out </MenuItem></Link> 
    </MenuList>
    </Menu>
    </Flex>
  )
}
