import React,{useState} from 'react'
import { Center, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'

import './style/index.css'

import Login from './pages/Login'
import Explore from './pages/Explore'
import Landing from './pages/Landing'
import Listings from './pages/Listings'
import Post from './pages/Post'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [auth, setAuth] = useState(true)

  const validatingAuth = ()=>{
    setAuth(true)
  }

  const logOut =() =>{
    setAuth(false)
  }


  return (
    <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={ <Landing /> } />

        <Route path="/login" element={<Login validate={validatingAuth}  /> } />

        <Route path="/app" element={<Center>
        {<Dashboard logout={logOut} component={<Explore/>}/>}
        </Center>
        }/>

        <Route path="/post" element={<Center>
        {<Dashboard logout={logOut} component={<Post/>}/>}
        </Center>
        }/>

        <Route path="/listings" element={<Center>
        {<Dashboard logout={logOut} component={<Listings/>}/>}
        </Center>
        }/>
    
       
    </Routes>
    </ChakraProvider>
    </BrowserRouter>
  )
}
