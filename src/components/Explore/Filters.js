import { Box, Menu, Button, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import {IoChevronDownOutline} from 'react-icons/io5'
import {filterBySize, filterByPrice} from '../../core/utils/helpers'

export default function Filters({properties, filter}) {
 console.log(properties)
  return (
    <Box className='explore-filters'> 
            <Menu>
            <MenuButton bg='white' className='filter-menu' rightIcon={<IoChevronDownOutline />} as={Button}>
                Price
            </MenuButton>
            <MenuList>                
                <MenuItem onClick={()=>filter(properties)}>All</MenuItem>
                <MenuItem onClick={()=>filter(filterByPrice(properties, 20000))}>20,000+</MenuItem>
                <MenuItem onClick={()=>filter(filterByPrice(properties, 50000))}>50,000+</MenuItem>
                <MenuItem onClick={()=>filter(filterByPrice(properties, 75000))}>75,000+</MenuItem>

            </MenuList>
            </Menu> 
            
            <Menu >
            <MenuButton ml='2vw' bg='white' className='filter-menu' rightIcon={<IoChevronDownOutline />} as={Button}>
                Size
            </MenuButton>
            <MenuList>
                <MenuItem onClick={()=>filter(properties)}>All</MenuItem>
                <MenuItem onClick={()=>filter(filterBySize(properties,2))}>2 BHK</MenuItem>
                <MenuItem onClick={()=>filter(filterBySize(properties,3))}>3 BHK</MenuItem>
            </MenuList>
            </Menu> 
            
            </Box>
  )
}
