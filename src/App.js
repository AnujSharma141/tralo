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
  const [auth, setAuth] = useState(false)

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
        <Route path="/app" element={<Center>
        {auth?<Dashboard logout={logOut} component={<Explore/>}/>:<Login validate={validatingAuth} />}
        </Center>
        }/>

        <Route path="/post" element={<Center>
        {auth?<Dashboard logout={logOut} component={<Post/>}/>:<Login validate={validatingAuth} />}
        </Center>
        }/>

        <Route path="/listings" element={<Center>
        {auth?<Dashboard logout={logOut} component={<Listings/>}/>:<Login validate={validatingAuth} />}
        </Center>
        }/>
    
       
    </Routes>
    </ChakraProvider>
    </BrowserRouter>
  )
}
