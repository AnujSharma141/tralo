import { Box, Flex} from '@chakra-ui/react'

import React, { useEffect,useRef, useState } from 'react'

import mapboxGl from 'mapbox-gl/dist/mapbox-gl.js'

import data from '../data/properties.json'
import secrets from '../data/MAP'

import Cards from '../components/Explore/Cards'
import ProprtyView from '../components/Explore/ProprtyView'
import Filters from '../components/Explore/Filters'


export default function Explore() {
    const map = useRef(null)
    const marker = useRef(null)
    const [properties, setProperties] = useState(data)
    const [displayCards, setDisplayCards] = useState(properties)
    const [coordinates, setCoordinates]= useState({lat: 25.1638, long: 75.8548})
    const [zoom, setZoom] = useState(12.5)
    const [view , setView] = useState({status: false, data: null})

    mapboxGl.accessToken = secrets.key;

    useEffect(()=>{
    map.current = new mapboxGl.Map({
        container: 'map',
        center: [75.8338, 25.1638],
        zoom: 12.5,
        style: 'mapbox://styles/mapbox/streets-v11'
      })
      displayCards.map(item=>{
        marker.current = new mapboxGl.Marker({ color: 'black' })
        .setLngLat([item.coordinates.long, item.coordinates.lat])
        .addTo(map.current)
        .setPopup(new mapboxGl.Popup().setHTML(`<h1>${item.name}</h1>`));
      })
      setView({...view, status: false})
    },[displayCards])

    useEffect(()=>{
        map.current.flyTo({
            center: [coordinates.long, coordinates.lat],
            zoom: zoom,
            essential: true
            });
    },[coordinates])


return (
<>
<Box className='explore-layout'>
    <Flex>
        <Box className='explore-content'> 
            <Filters properties={properties} filter={setDisplayCards} />
            <Cards list={displayCards} center={setCoordinates} select={setView} zoom={setZoom} toggle={marker} />
        </Box> 
        
        <Box id='map' className='explore-map'>
            {view.status? <ProprtyView view={view} close={setView} />:null}
        </Box>
    </Flex>
</Box> 
</>
)
}
