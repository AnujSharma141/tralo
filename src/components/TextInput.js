import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

export default function TextInput({label,width,placeholder}) {
  return (
    <FormControl mt='1vw' w={width || '35vw' }>
      <FormLabel className='input-label'>{label}</FormLabel>
      <Input className='input-box' placeholder={placeholder?placeholder:''} mt={width?'0vw':'0.2vw'} type='text' />
      </FormControl>
  )
}