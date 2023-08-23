import React from 'react'
import { Box, Card, Center, Flex, Input, Image, Heading, Text, Button, Avatar, MenuButton, Menu, MenuList, MenuItem, CloseButton } from '@chakra-ui/react'


export default function ProprtyView({view,close}) {
  return (
    <Box fontFamily='inter' display='flex' position='relative' justifyContent='flex-start' zIndex='3' w='39vw' ml='7vw' mt='48vh' pt='1vw' borderRadius='0.7vw' h='40vh' bg='white'>
                <Image w='22vw' h='35vh' ml='1vw' borderRadius='0.5vw' src={view.data.url}/>
                <Box ml='2vw' w='18vw' mt='1vw'>
                <Text fontWeight='semibold' w='10vw' lineHeight='2vw' fontSize='1.5vw'>{view.data.name}</Text>
                <Text  fontSize='1vw' color='#B9b9b9' mt='1.5vw'>{view.data.property} BHK. {view.data.area} sq ft. </Text>
                <Text  mt='1.75vw' color='#B9b9b9'>listed by</Text>
                <Text  fontSize='1vw' mt='0.5vw'>{view.data.owner.name}</Text>
                <Text  fontSize='1vw' mt='0.5vw'>{view.data.owner.mail}</Text>
                <Text  fontSize='1vw' mt='0.5vw'>+91 {view.data.owner.contact}</Text>
                
                </Box>
                <CloseButton onClick={()=>close({status: false, data: null})} mr='1vw' />
            </Box>
  )
}
