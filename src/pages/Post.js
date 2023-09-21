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
    <Box w='80vw' ml='11vw' mt='10vw' className='post-layout'>
    <Flex className='post-flex'>

      <Box className='post-attachments'>
        <Text>Add Property Images</Text>
        <Box className='post-image-upload'>
        <Box ><FiUpload size='1.4vw'/></Box>
        <Text mt='0.6vw'>Upload Images</Text>
        </Box>
        <Text mt='2vw'>Mark Property Location</Text>
        <Box className='post-map-mark' id='post' ></Box>
      </Box>

      <Box className='post-fields'>
      <Box className='post-form'>
      
      <form>
      <Text>Property Details</Text>
      <TextInput label="Name"/>

      <Box display='flex' justifyContent='space-between' className='post-input-row'>
      <Box className='input-control post-select-input'>
      <FormLabel className='input-label'>Size</FormLabel>
      <Select className='input-box input-box-small'>
      <option value='option1'>1 BHK</option>
      <option value='option2'>2 BHK</option>
      <option value='option3'>3 BHK</option>
      </Select></Box>
      <TextInput width='17vw' label="Area"/>   
      </Box>
  
      <TextInput label="Address"/>

      <Flex className='post-input-row' justify='space-between'> 
      <TextInput width='17vw' label="City"/>   
      <TextInput width='17vw' label="State"/>   
      </Flex>
      
      <TextInput label="Price"/>

      <Text mt='2vw'>Owner Details</Text>
      <TextInput label="Name"/>
      <TextInput label="Phone"/>
      <TextInput label="Email"/>

      <Checkbox defaultChecked  mb='3vw' className='chk-box' mt='3vw' ml='0.2vw' sx={{'[data-checked]':{borderColor: "#000"}}}>
      <Text className='post-checkbox-text'>I agree the Terms and Conditions</Text>
      </Checkbox>
  
      </form>
      
      </Box>
      <Box className='post-button-container'>
        <Button  className='button-primary post-button' >Post</Button>
      </Box>
      
      
      </Box>

      </Flex>
      </Box>
  )
}
