import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, Button, Flex, Image } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './nav.css';
import logo from './Logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box display='flex' justifyContent='space-between' bg='pink' border='10px red solid'>
      <Box>
        <Flex bg='#fff'>
          <Image src={logo} alt='logo' />
        </Flex>
      </Box>
      <Box >
        <Flex>
          <Breadcrumb separator=' ' p='1'>
            <BreadcrumbItem gap='2'>
              {/* <Link to="/home"> */}
                <Button bg='orange.300' size='md' fontFamily='sans-serif'
                  onClick={() =>{
                    navigate("/")
                  }}>
                  Home
                </Button>
              {/* </Link> */}
              <Button bg='orange.300' size='md' fontFamily='sans-serif'
                onClick={() =>{
                  navigate("/Login")
                }} >
                LogIn
              </Button>
              <ColorModeSwitcher justifySelf="flex-end" />
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Box> 
    </Box>
  )
}

export default Navbar
