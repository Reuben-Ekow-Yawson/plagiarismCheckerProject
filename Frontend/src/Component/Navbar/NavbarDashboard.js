import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, Button, Flex, Image } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './nav.css';
import logo from './Logo.png';

const NavbarDashboard = () => {
  return (
    <Box className='Dashboardnav'>
      <Box className='DashboardnavWrap'>
        <Box>
          <Flex >
            <Image ml='0px' src={logo} alt='logo' />
          </Flex>
        </Box>
        <Box >
          <Flex mr='0px'>
            <Breadcrumb separator=' ' p='1'>
              <BreadcrumbItem gap='2'>
                <Button bg='orange.300' size='md' fontFamily='sans-serif'>
                  Home
                </Button>
                <Button bg='orange.300' size='md' fontFamily='sans-serif'>
                  LogOut
                </Button>
                <ColorModeSwitcher justifySelf="flex-end" />
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Box> 
      </Box>
    </Box>
    
  )
}

export default NavbarDashboard
