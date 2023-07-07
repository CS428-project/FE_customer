import { Box, Center, Container, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import "./Header.css";
import React from 'react'

export default function Header() {
  return (
    <div className="header-wrapper flex_cen">
        <Box className='logo' fontSize={70}><span className='logo_content'>Caucheez</span></Box>
        <div className='nav_bar_container flex_cen'>
          <ul className='nav_bar flex_cen'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/news'}>News</Link>
            </li>
            <li>
              <Link to={'/about'}>About us</Link>
            </li>
            <li>
              <Link to={'/faqs'}>FAQs</Link>
            </li>
            <li>
              <Link to={'/mentor'}>Become a mentor</Link>
            </li>
          </ul>
        </div>
        <Box as='button' borderRadius='md' mr={'20px'} bg='#146C94' color='white' px={4} h={8}>
          Signup/Login
        </Box>
      </div>
    

  )
}
