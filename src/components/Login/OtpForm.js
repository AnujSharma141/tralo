import { Box, Button, FormControl, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, PinInput, PinInputField, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function OtpForm({login, validate, setLogin, setRequested}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <Button className='button-primary login-form-button' type='submit' onClick={login?()=>validate(): ()=>{onOpen(); setLogin(true); setRequested(false)}}   mt='2vw' >Verify</Button>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg='#f7f7f7' p='1vw'>
          <ModalHeader>Welcome to Tralo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text>Some Text Here.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      </FormControl>
  )
}
