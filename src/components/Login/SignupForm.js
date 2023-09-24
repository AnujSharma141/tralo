import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import TextInput from '../../core/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SignupForm({setRequested,setLogin}) {
    const PhoneSchema = Yup.object().shape({
        phone:Yup.number().max(9999999999, 'Invalid Phone Number').min(1000000000, 'Invalid Phone Number')
      })
    
      const toast = useToast()
      const formik = useFormik({
        initialValues: {
            name: null,
            email: null,
            phone: '..........',
        },
        onSubmit: (values)=>{
          toast({
            containerStyle:{
              margin: '2vw',
            },
            title: "Mock OTP ",
            description: "enter 1234",
            status: 'info',
            variant: 'subtle',
            position:'bottom-right',
            duration: 6000,
            isClosable: true,
          })
          console.log(formik.values)
          setRequested(true)
        },
        validationSchema: PhoneSchema
      })
    
      const isError = formik.values.phone > 9999999999 || formik.values.phone < 1000000000
    
    
  return (
    <form mt='2.5vw' onSubmit={formik.handleSubmit}>
        
        <TextInput width='24vw' id='name' value={formik.values.name} handler={formik.handleChange} required={true} label="Name" placeholder="Enter your full name"/>
        <TextInput width='24vw' id='email' value={formik.values.emaila} handler={formik.handleChange} required={true} label="Email" placeholder="Enter your email address"/>
        <Box className='phone-input'>
        <FormControl isInvalid={isError}>
        <FormLabel className='input-label'>Phone Number</FormLabel>
        <InputGroup>
        <InputLeftAddon children='+91' className='phone-input-addon' />
        <Input validate={PhoneSchema} autoComplete='off' type='number' id='phone' required onChange={formik.handleChange} value={formik.values.phone}  className='input-box' width='20vw' placeholder='Enter your phone number' />
        </InputGroup>
        {isError? <FormErrorMessage>Invalid Phone Number</FormErrorMessage>: ''}
        </FormControl>
        </Box>
      

        <Button className='button-primary login-form-button' type='submit' >
            Continue
        </Button>
        <Box className='login-form-text' display='flex' flexDirection='row'>
            <Text color='#7C7C7C'>Have an account?</Text>
            <Text onClick={()=>setLogin(true)} cursor='pointer' color='black' ml='0.5vw'>Log In</Text>
        </Box> 
      
      </form>
  )
}
