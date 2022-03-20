import React from 'react';
import { ChakraProvider, theme, } from '@chakra-ui/react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Login from './Component/logIn/Login';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Home />
      <Login />
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
