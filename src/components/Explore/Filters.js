import { Box, Menu, Button, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import {IoChevronDownOutline} from 'react-icons/io5'

export default function Filters() {
  return (
    <Box className='explore-filters'> 
            <Menu>
            <MenuButton bg='white' className='filter-menu' rightIcon={<IoChevronDownOutline />} as={Button}>
                Price
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
            </Menu> 
            
            <Menu >
            <MenuButton ml='2vw' bg='white' className='filter-menu' rightIcon={<IoChevronDownOutline />} as={Button}>
                Size
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
            </Menu> 
            
            </Box>
  )
}
