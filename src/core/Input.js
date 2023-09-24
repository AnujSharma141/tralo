import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

export default function TextInput({id, label, width, placeholder, required, value, handler}) {
  return (
    <FormControl className='input-control' w={width || '35vw' }>
      <FormLabel className='input-label'>{label}</FormLabel>
      <Input onChange={handler} id={id} value={value} autoComplete='off'  required={required? required: false} className={width=== '17vw'?'input-box input-box-small':"input-box"} placeholder={placeholder?placeholder:''} mt={width?'0vw':'0.2vw'} type='text' />
    </FormControl>
  )
}
