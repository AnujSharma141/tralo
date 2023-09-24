import { Flex, Box, Text, Center, Button, Img, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import branding_light from '../assets/img/branding_light.png'
import section_graphic from '../assets/img/section_graphic.png'
import landing_display from '../assets/img/landing-display.png'

import { IoChatbubbleEllipsesOutline, IoEarthOutline, IoLogoGithub, IoLogoTwitter, IoMapOutline, IoSearchOutline } from 'react-icons/io5'

export default function Landing() {

  const features = [{ title: 'Listings', icon: <IoEarthOutline size='1.8vw' />, text: 'Explore our handpicked collection of premier properties that define luxury living.' },
  { title: 'Search', icon: <IoSearchOutline size='1.8vw' />, text: 'Find your ideal home in seconds with our lightning-fast, location-based search.' },
  { title: 'Reviews', icon: <IoChatbubbleEllipsesOutline size='1.8vw' />, text: 'Join thousands of satisfied clients who found their dream properties with us.' },
  { title: 'Insights', icon: <IoMapOutline size='1.8vw' />, text: 'Explore vibrant neighborhoods, school ratings, and nearby amenities.' }]


  return (
      <Flex className='landing-layout'>

        <Box className='landing-hero'>
          <Box className='landing-hero-content'>
            <Flex className='landing-nav'>
              <Box className='landing-nav-logo'>
                <Img src={branding_light} className='landing-nav-logo-img' />
              </Box>
              <Flex className='landing-nav-menu'>
                <a href='#explore'>explore</a>
                <a href='#features'>features</a>
                <a href='#contact'>contact</a>
              </Flex>
            </Flex>

              <Text className='landing-hero-heading'>Find your<br /> Perfect home.</Text>
              <Text className='landing-hero-text'>Start expolring apartments near you.</Text>

          </Box>
        </Box>
        <a name='explore' />
        <Image src={landing_display} className='landing-display-img'  />
        <Text className='landing-display-text'>Explore a World of Premier Properties</Text>

        <Text className='landing-hero-heading landing-display-heading' color='black' mt='1vw'>discover your dream home.</Text>
        <Link to='/app'><Button className='button-primary landing-display-button'>Get Started</Button></Link>        
      
        <a name='features'></a>
        <Box className='landing-features'>
          {features.map(item => (
            <Box className='landing-feature-card' key={item.title}>
              <Box className='landing-feature-icon'>{item.icon}</Box>
              <Text className='landing-feature-title'>{item.title}</Text>
              <Text className='landing-feature-text'>{item.text}</Text>
            </Box>
          ))}
        </Box>

        <Flex className='landing-section'>
          <Text className='landing-section-text'>Experience the future of property hunting through our user-friendly interface, where finding your perfect space is just a tap away.</Text>
          <Image src={section_graphic} className='landing-section-graphic'/>
        </Flex>


        <a name='contact'></a>
        <Text className='footer-title'>&lt;a real estate application frontend template/&gt;</Text>
        <Text className='footer-text'>designed and crafted by</Text>
        <Text className='footer-author'><a href='https://anujsharma.online/'>Anuj Sharma</a></Text>
        <Box className='footer-social'>
          <a href='https://twitter.com/itsnotrika' className='social-icon'><IoLogoTwitter size='1.7vw' /></a>
          <a href='https://github.com/AnujSharma141/' className='social-icon'><IoLogoGithub size='1.7vw' /></a>
        </Box>
      </Flex>
  )
}
