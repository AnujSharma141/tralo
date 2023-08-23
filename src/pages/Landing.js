import { Flex, Box, Text, Heading, Center, Button, Img } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import branding from '../assets/img/branding.png'

import {IoChatbubbleEllipsesOutline, IoEarthOutline, IoLogoGithub, IoLogoTwitter, IoMapOutline, IoSearchOutline} from 'react-icons/io5'

export default function Landing() {

  const features = [{title: 'Listings', icon: <IoEarthOutline size='2vw' />, text: 'Explore our handpicked collection of premier properties that define luxury living.'},
  {title: 'Search', icon: <IoSearchOutline size='2vw' />, text: 'Find your ideal home in seconds with our lightning-fast, location-based search.'},
  {title: 'Reviews', icon: <IoChatbubbleEllipsesOutline size='2vw' />, text: 'Join thousands of satisfied clients who found their dream properties with us.'},
  {title: 'Insights', icon: <IoMapOutline size='2vw' />, text: 'Explore vibrant neighborhoods, school ratings, and nearby amenities.'}]
  
  const FeatureCard = ({title, icon, text}) => 
  <Box width='28vw' mt='3vw' h='21vw' borderRadius='0.75vw' pl='4vw' pt='3vw' bg='#FCFCFC' border='1px solid #C7C7C7'>
  {icon}
  <Text fontSize='1.9vw' mt='1.5vw'>{title}</Text>
  <Text lineHeight='2vw' color='grey' w='17vw' mt='1vw' fontSize='1vw'>
  {text}</Text>
  </Box>

  return (
    <div>
      <Flex direction='column' align='center'>
      <Flex align='center' w='95vw' justify='space-between' p='2vw 2vw 0 5vw' mt='3vw'>
        <Box>
            <Img src={branding} width='8vw'/>
        </Box>
        <Flex w='40vw' mt='1vw' justify='space-around' dir='row'>
            <Link>about</Link>
            <Link>resources</Link>
            <Link>blog</Link>
            <Link>contact</Link>
        </Flex>
      </Flex>
        
      <Heading textAlign='center' fontWeight='black' fontSize='10vh' mt='10vw'>Find Your<br/> Perfect Home.</Heading>
      
      <Flex w='70vw' mt='10vw' direction='column' justifyContent='center' alignItems='center' borderRadius='1vw' h='60vh' bgSize='cover' bgPos='center' bg='url(https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'>
     
        <Text mt='2vw' color='white'>start expolring apartments near you.</Text>
        <Link to='/app'>
        <Button mt='2vw' fontSize='1.1vw' fontWeight='semibold' padding='2vw 2vw'>Get Started</Button>
        </Link>

      </Flex>

        <Text mt='10vw' w='36vw'  color='black' lineHeight='3vw' textAlign='center' fontSize='1.4vw'>Experience the future of property hunting through our user-friendly interface, where finding your perfect space is just a tap away.</Text>

        <Flex mt='8vw' wrap='wrap' direction='row' w='65vw' justify='space-evenly' mb='10vw'>
            {features.map(item=><FeatureCard title={item.title} icon={item.icon} text={item.text} />)}
        </Flex>

        <Flex w='70vw' bgPosition='bottom' mt='0vw' direction='column' justifyContent='center' alignItems='center' borderRadius='0.6vw' h='70vh' bgSize='cover' bgPos='center' bg='url(https://images.unsplash.com/photo-1569152811536-fb47aced8409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80)'>
          <Text mt='2vw'  fontSize='1.3vw' color='white'>List your property with tralo.</Text>
        </Flex>

        <Text mt='10vw' fontSize='4vw' w='60vw' textAlign='center' fontWeight='extrabold'>a real estate application frontend template</Text>
        <Text mt='5vw' color='#909090'>designed and crafted by</Text>
        <Text mt='1.5vw' mb='4vw' textDecor='underline'>Anuj Sharma</Text>
        <Flex mb='10vw' width='7vw' justify='space-around'>
        <IoLogoTwitter  size='1.7vw' />
        <IoLogoGithub size='1.7vw' />
        </Flex>
      </Flex>
    </div>
  )
}
