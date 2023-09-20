import { AbsoluteCenter, Box, Button, Center, Checkbox, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React, { useRef, useState, useEffect } from 'react'

import {FiUpload} from 'react-icons/fi'
import mapboxGl from 'mapbox-gl/dist/mapbox-gl.js'

import TextInput from '../core/Input'
import secrets from '../data/MAP'

export default function Post() {

  const map = useRef(null)
  const [coordinates, setCoordinates]= useState({lat: 25.1638, long: 75.8548})
  
  mapboxGl.accessToken = secrets.key;

useEffect(()=>{

  map.current = new mapboxGl.Map({
      container: 'post',
      center: [75.8338, 25.1638],
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v11'
    }) },[])
  

  return (
    <Box w='80vw' ml='11vw' mt='10vw'>
    <Flex mt='2vw'>

      <Box>
      <Text>Add Property Images</Text>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' mt='1vw' w='37vw' h='20vh' bg='#dedede' border='1px dashed #bfbfbf' borderRadius='0.5vw'>
      <Box ><FiUpload size='1.4vw'/></Box>
      <Text mt='0.6vw'>Upload Images</Text>
      </Box>
      <Text mt='2vw'>Mark Property Location</Text>
      <Box mt='1vw' w='37vw' h='30vh'  border='1px solid #bfbfbf' id='post' borderRadius='0.5vw'></Box>
      </Box>

      <Box>
      <Box className='post' ml='4vw' h='62vh' overflowY='scroll' overflowX='hidden' pr='3vw'>
      
      <form>
      <Text>Property Details</Text>
      <TextInput label="Name"/>

      <Box display='flex' justifyContent='space-between' w='35vw'>
      <Box mt='1vw' w='17vw'>
      <FormLabel className='input-label'>Size</FormLabel>
      <Select className='input-box'>
      <option value='option1'>1 BHK</option>
      <option value='option2'>2 BHK</option>
      <option value='option3'>3 BHK</option>
      </Select></Box>
      <TextInput width='17vw' label="Area"/>   
      </Box>
  
      <TextInput label="Address"/>

      <Flex w='35vw' justify='space-between'> 
      <TextInput width='17vw' label="City"/>   
      <TextInput width='17vw' label="State"/>   
      </Flex>
      
      <TextInput label="Price"/>

      <Text mt='2vw'>Owner Details</Text>
      <TextInput label="Name"/>
      <TextInput label="Phone"/>
      <TextInput label="Email"/>

      <Checkbox defaultChecked  mb='3vw' className='chk-box' mt='3vw' ml='0.2vw' sx={{'[data-checked]':{borderColor: "#000"}}}>
      I agree the Terms and Conditions
      </Checkbox>
      
      </form>
      
      </Box>
      <Box w='39vw' p='1vw 0' display='flex' justifyContent='flex-end'>
        <Button w='6vw' ml='4vw' className='button-primary' >Post</Button>
        </Box>
      
      
      </Box>
      </Flex>
      </Box>
  )
}
