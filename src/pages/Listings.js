import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Button,
  Box,
  Text,
} from '@chakra-ui/react'
import React from 'react'


export default function Listings() {
  return (
    <Box w='84vw' ml='8vw' mt='3vw'>
      <Text fontSize='2vw'>Your Properties</Text>
      <TableContainer  mt='2vw'>
  <Table  w='84vw' size='lg' borderColor='gray.100' bg='white' borderRadius='0.75vw' variant='simple' > 
    <Thead >
      <Tr fontSize='0.9vw' fontWeight='semibold' color='black' fontFamily='inter'>
        <Td >NAME</Td>
        <Td >ADDRESS</Td>
        <Td >PRICE</Td>
        <Td >SIZE</Td>
        <Td >AREA</Td>
        <Td >PHONE</Td>
        <Td >EMAIL</Td>
        <Td >ACTION</Td>
      </Tr>
    </Thead>
    <Tbody>
      <Tr borderColor='gray.100' color='gray.600'>
        <Td>Ridhi Mansions</Td>
        <Td>Kunhadi, Kota, RJ</Td>
        <Td>800000</Td>
        <Td>4BHK</Td>
        <Td>350000</Td>
        <Td>1234567890</Td>
        <Td>abc@email.com</Td>
        
        <Td><Button className='button-primary'>Delete</Button></Td>
      </Tr>
      
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
  )
}
