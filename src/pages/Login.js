import React, { useState } from 'react'
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Box, Flex, Container, Input, color, FormControl, Divider, AbsoluteCenter, InputGroup, InputLeftElement, InputLeftAddon, PinInput, HStack, PinInputField, FormLabel } from '@chakra-ui/react'
import branding from '../assets/img/branding_light.png'
import { FcGoogle } from "react-icons/fc"

export default function Login(props) {
  const [requested, setRequested] = useState(false)

  const PhoneInput = () => <FormControl mt='2.5vw'>
        <Box mt='2vw'>
        <FormControl>
        <FormLabel className='input-label'>Phone Number</FormLabel>
        <InputGroup>
        <InputLeftAddon children='+91' padding='1.5vw 1vw' borderColor='#C1C1C1' />
        <Input required className='input-box' width='20vw' placeholder='enter your phone number'></Input>
        </InputGroup>
        </FormControl>
        
      </Box>
      <Button className='button-primary' type='submit' onClick={()=>setRequested(true)} mt='2vw' >
        Continue
      </Button>
      </FormControl>

  const OtpInput = ()=><FormControl mt='2.5vw' >
        <Box mt='2vw'>
          <Text fontSize='0.89vw' color='#7C7C7C'>Enter OTP to continue</Text>
          <HStack mt='0.5vw'>
            <PinInput type='number' placeholder='x'>
              <PinInputField boxShadow='0 0 18px #ECECEC' fontSize='0.9vw' background='white' borderColor='#C1C1C1' bgColor='white' padding='1.5vw 1vw'   _placeholder={{color: '#A8A8A8'}} />
              <PinInputField boxShadow='0 0 18px #ECECEC' fontSize='0.9vw' background='white' borderColor='#C1C1C1' bgColor='white' padding='1.5vw 1vw'   _placeholder={{color: '#A8A8A8'}}/>
              <PinInputField boxShadow='0 0 18px #ECECEC' fontSize='0.9vw' background='white' borderColor='#C1C1C1' bgColor='white' padding='1.5vw 1vw'   _placeholder={{color: '#A8A8A8'}} />
              <PinInputField boxShadow='0 0 18px #ECECEC' fontSize='0.9vw' background='white' borderColor='#C1C1C1' bgColor='white' padding='1.5vw 1vw'   _placeholder={{color: '#A8A8A8'}} />
            </PinInput>
          </HStack>
        </Box>
        <Button className='button-primary' type='submit' onClick={()=>props.validate()}   mt='2vw' >Verify</Button>
      </FormControl>

  return (
    <><Box w="100%" bg="#F1F1F1" gap="0vw">
        <Flex>
          <Box height='100vh' bgImage="url(https://images.unsplash.com/photo-1619994121345-b61cd610c5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)" backgroundSize="cover"  w="55vw">
            <Image src={branding} m='3vw 3vw' w='8vw' />
          </Box>
          <Container  w="30vw">
            <Text marginTop='8vw' fontSize="1.7vw" fontWeight='medium'>Get Started</Text>
            {requested? <OtpInput />: <PhoneInput />}
            <Box mt='10vw' w='20vw' position='relative' >
            <Divider borderColor='gray.400' />
            </Box>
            <Button  leftIcon={<FcGoogle size='1.3vw'/>} color='black' bg='#fff' fontSize='0.9vw' mt='5vw' border='1px solid' fontWeight='medium' borderColor='#C1C1C1'  padding='1.7vw 1.5vw'>sign in with Google</Button>
          </Container>
        </Flex>
      </Box></>
  )
}
