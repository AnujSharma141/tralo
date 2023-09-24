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
                <MenuItem>All</MenuItem>
                <MenuItem>20,000+</MenuItem>
                <MenuItem>50,000+</MenuItem>
                <MenuItem>75,000+</MenuItem>

            </MenuList>
            </Menu> 
            
            <Menu >
            <MenuButton ml='2vw' bg='white' className='filter-menu' rightIcon={<IoChevronDownOutline />} as={Button}>
                Size
            </MenuButton>
            <MenuList>
                <MenuItem>1 BHK</MenuItem>
                <MenuItem>2 BHK</MenuItem>
                <MenuItem>3 BHK</MenuItem>
            </MenuList>
            </Menu> 
            
            </Box>
  )
}
