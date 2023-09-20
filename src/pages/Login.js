import React, { useState } from 'react'
import { Image, Box, Text } from '@chakra-ui/react'
import branding from '../assets/img/branding_light.png'
import OtpForm from '../components/Login/OtpForm'
import SignupForm from '../components/Login/SignupForm'
import LoginForm from '../components/Login/LoginForm'

export default function Login(props) {
  const [requested, setRequested] = useState(false)
  const [login, setLogin] = useState(false)

  return (
    <Box className="login-container">
    <Box className="login-background-image">
      <Image src={branding} className="login-branding-logo" alt="Branding" />
    </Box>
    {login ? 
    <Box className="login-form-container login-form-container">
        <Text className="login-form-title">Login</Text>
        {requested ? <OtpForm login={login} validate={props.validate} setLogin={setLogin} setRequested={setRequested} />
        :<LoginForm setRequested={setRequested} setLogin={setLogin} />}
    </Box>
    :<Box className="login-form-container signup-form-container">
      <Text className="login-form-title">Create Account</Text>
      {requested ? <OtpForm login={login} setLogin={setLogin} setRequested={setRequested} />
      :<SignupForm setRequested={setRequested} setLogin={setLogin} />}
    </Box>
    }
  </Box>
  )
}







