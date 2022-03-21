import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import User from './Component/Dashboard/Pages/User/User/User';
import NewUser from './Component/Dashboard/Pages/User/newUser/NewUser.jsx';
import UserList from './Component/Dashboard/Pages/User/userList/UserList.jsx';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/Login'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </Router>




      {/* <Router>

      </Router> */}
      {/* <Home /> */}
      {/* <UserList /> */}
      {/* <Navbar />
      <Login />*/}
      {/* <Dashboard />  */}
    </ChakraProvider>
  );
}

export default App;
