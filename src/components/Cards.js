import React from 'react'
import { Box, Card, Center, Flex, Input, Image, Heading, Text, Button, Avatar, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react'

export default function Cards(props) {
    const focus = (item) =>{
        props.center({lat: item.coordinates.lat - 0.0050, long: item.coordinates.long})
        props.zoom(14)
        props.select({status: true, data: item})
    } 
  return (
    <Box mt='4vw' h='80vh' className='cards' overflowY='scroll' overflowX='hidden'>
    <Flex wrap='wrap' direction='row' width='50vw'>   
    {props.list.map(item=>
        <Card mr='2.5vw' mt='3vw' border='1px solid #ECECEC' w='18vw' p='1.4vw 1vw' boxShadow='none'>
        <Image src={item.url} w='20vw' borderRadius='lg'/>
        <Heading mt='1.5vw' fontWeight='semibold' fontSize='1.2vw'>{item.name}</Heading>
        <Text mt='0.3vw' fontSize='1vw' color='black'>from Rs {item.price}</Text>
        <Flex fontSize='0.9vw' color='gray' align='center' mt='1vw' justify='space-between' w='14vw'>
        <Text>{item.city}, {item.state}</Text> .
        <Text>{item.property} BHK</Text> .
        <Text>{item.area} sq ft</Text>
        </Flex>
        <Flex>
        <Button onClick={()=>focus(item)} _hover={{background: '#f0f0f0', color: 'black', border: '1px solid black'}} bg='black' border='1px solid black' mr='0.7vw' color='white' w='7vw' fontSize='0.9vw' mt='1vw' padding='1.5vw' fontWeight='semibold'>View</Button>
        {/* <Button _hover={{background: '#f0f0f0', color: 'black', border: '1px solid black'}} bg='white' border='1px solid #b5b5b5' color='black' w='7vw' fontSize='0.9vw' mt='1vw' padding='1.5vw' fontWeight='semibold'>Contact</Button>
     */}
        </Flex>
        </Card>   
    )}
    </Flex>
</Box>
  )
}
