import { AbsoluteCenter, Box, Button, Center, Checkbox, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React, { useRef, useState, useEffect } from 'react'

import {FiUpload} from 'react-icons/fi'
import mapboxGl from 'mapbox-gl/dist/mapbox-gl.js'

import TextInput from '../core/Input'
import secrets from '../data/MAP'

export default function Post() {

  const map = useRef(null)
  const marker = useRef(null)
  const [coordinates, setCoordinates]= useState({lat: 25.1638, long: 75.8548})
  
  mapboxGl.accessToken = secrets.key;

useEffect(()=>{
  map.current = new mapboxGl.Map({
      container: 'post',
      center: [75.8338, 25.1638],
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v11'
    }) 

    marker.current = new mapboxGl.Marker({ color: 'black',draggable: true })
    .setLngLat([75.8338, 25.1638])
    .addTo(map.current)
       
      function onDragEnd() {
      const lngLat = marker.current.getLngLat();
      console.log(lngLat)
      } 

      marker.current.on('dragend', onDragEnd);
},[])
  return (
    <Box w='80vw' ml='11vw' mt='10vw' className='post-layout'>
    <Flex className='post-flex'>

      <Box className='post-attachments'>
        <Text>Add Property Images</Text>
        <Box className='post-image-upload'>
        <Input type='file' className='post-img-inp' border='0px' accept='.jpg, .png' />
        <Box pos='absolute'><FiUpload size='1.4vw'/></Box>
        </Box>
        <Text mt='2vw'>Mark Property Location</Text>
        <Box className='post-map-mark' id='post'>
        </Box>
      </Box>

      <Box className='post-fields'>
      <Box className='post-form'>
      
      <form>
      <Text>Property Details</Text>
      <TextInput label="Name" placeholder="Enter property name"/>

      <Box display='flex' justifyContent='space-between' className='post-input-row'>
      <Box className='input-control post-select-input'>
      <FormLabel className='input-label' >Size</FormLabel>
      <Select className='input-box input-box-small'>
      <option value='option1'>1 BHK</option>
      <option value='option2'>2 BHK</option>
      <option value='option3'>3 BHK</option>
      </Select></Box>
      <TextInput placeholder="Enter area of the property" width='17vw' label="Area"/>   
      </Box>
  
      <TextInput placeholder="Enter full address of property" label="Address"/>

      <Flex className='post-input-row' justify='space-between'> 
      <TextInput width='17vw' placeholder="Enter city name" label="City"/>   
      <TextInput width='17vw' placeholder="Enter state name" label="State"/>   
      </Flex>
      
      <TextInput placeholder="Enter starting price of property" label="Price"/>

      <Text mt='2vw'>Owner Details</Text>
      <TextInput placeholder="Enter your full name" label="Name"/>
      <TextInput placeholder="Enter your contact number" label="Phone"/>
      <TextInput placeholder="Enter your email address" label="Email"/>

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
