import { Box, Card, Center, Flex, Input, Image, Heading, Text, Button, Avatar, MenuButton, Menu, MenuList, MenuItem, CloseButton } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import React, { useEffect,useRef, useState } from 'react'

import branding from '../assets/img/branding.png'
import mapboxGl from 'mapbox-gl/dist/mapbox-gl.js'

import data from '../data/properties.json'

import Cards from '../components/Cards'
import Nav from '../components/Nav'
import ProprtyView from '../components/ProprtyView'


export default function Explore() {
    const map = useRef(null)
    const marker = useRef(null)
    const [coordinates, setCoordinates]= useState({lat: 25.1638, long: 75.8548})
    const [zoom, setZoom] = useState(12.5)
    const [view , setView] = useState({status: false, data: null})

    const list = data

    mapboxGl.accessToken = process.env.MAP;
    
    useEffect(()=>{
    map.current = new mapboxGl.Map({
        container: 'map',
        center: [75.8338, 25.1638],
        zoom: 12,
        style: 'mapbox://styles/mapbox/streets-v11'
      })
      list.map(item=>{
        marker.current = new mapboxGl.Marker({ color: 'black' })
        .setLngLat([item.coordinates.long, item.coordinates.lat])
        .addTo(map.current)
        .setPopup(new mapboxGl.Popup().setHTML(`<h1>${item.name}</h1>`));
      })
     
    },[])

    useEffect(()=>{
        map.current.flyTo({
            center: [coordinates.long, coordinates.lat],
            zoom: zoom,
            essential: true
            });
    },[coordinates])


return (
<>
<Box overflowY='hidden' w='96vw'>
    <Flex>
        
        <Box ml='4vw' mt='3vw' w='40vw' bg='#F1F1F1'> 
            <Center>
            <Box w='40vw'>

            <Box position='fixed' bg='#F1F1F1' zIndex='1'> 
                {/* <Image mt='3vw' src={branding} w='7vw' /> */}
                <Input  fontSize='0.9vw' boxShadow='0 0 18px #ECECEC' background='white' borderColor='#C1C1C1' bgColor='white' padding='1.5vw 1vw' width='30vw' placeholder='search city ...' _placeholder={{color: '#A8A8A8'}}></Input>
            </Box>

            <Cards list={list} center={setCoordinates} select={setView} zoom={setZoom} toggle={marker} />
            </Box>
            </Center>
        </Box>
        
        <Box position='fixed' zIndex='1' top='0vw' right='0vw' id='map' h='100vh' bg='black' w='50vw'>
            {/* <Nav /> */}
            {view.status? <ProprtyView view={view} close={setView} />:null}
        </Box>

    </Flex>
</Box> 
</>
)
}
