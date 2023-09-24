import { Box, Button, FormControl, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, PinInput, PinInputField, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'

export default function OtpForm({login, validate, setLogin, setRequested}) {
  const toast = useToast()
  const createUser = () => {
    toast({
      containerStyle:{
        margin: '2vw',
      },
      title: 'Account Created'  ,
      description: "",
      status: 'success',
      variant: 'subtle',
      position:'bottom-right',
      duration: 6000,
      isClosable: true,
    })
  }
  
  return (
    <FormControl mt='2.5vw' >
        <Box mt='2vw'>
          <Text className='input-label'>Enter OTP to continue</Text>
          <HStack className='otp-input-form'>
            <PinInput type='number' placeholder='x'>
              <PinInputField className='otp-input'  _placeholder={{color: '#A8A8A8'}} />
              <PinInputField className='otp-input'  _placeholder={{color: '#A8A8A8'}} />
              <PinInputField className='otp-input'  _placeholder={{color: '#A8A8A8'}} />
              <PinInputField className='otp-input'  _placeholder={{color: '#A8A8A8'}} />
              
            </PinInput>
          </HStack>
        </Box>
        <Button className='button-primary login-form-button' type='submit' onClick={login?()=>validate(): ()=>{createUser(); setLogin(true); setRequested(false)}}   mt='2vw' >Verify</Button>

      </FormControl>
  )
}
