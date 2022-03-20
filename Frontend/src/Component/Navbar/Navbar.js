import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, Button, Flex, Image } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './nav.css';
import logo from './Logo.png';

const Navbar = () => {
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
              <Button bg='orange.300' size='md' fontFamily='sans-serif'>
                Home
              </Button>
              <Button bg='orange.300' size='md' fontFamily='sans-serif'>
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
