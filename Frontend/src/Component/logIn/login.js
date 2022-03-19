import {
    Button,
    Center,
    FormControl,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import React from "react";
  import "./login.css";
  import { BsEye } from "react-icons/bs";
  import { RiEyeCloseLine } from "react-icons/ri";

const Login = () => {
    const [input, setInput] = useState("");
    const handleInputChange = (e) => setInput(e.target.value);
    const isError = input === "";

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

  return (
    <Center h="100vh">
      <FormControl width="40%" bg="green" p="10" >
        <Heading mb={5}>Login</Heading>

        <Input
          id="email"
          size="lg"
          type="email"
          value={input}
          placeholder="Enter email"
          onChange={handleInputChange}
        />
        <InputGroup size="lg">
          <Input
            mt={4}
            pr="3.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement
            width="4rem"
            h="3.5rem"
            size="sm"
            onClick={handleClick}
          >
            {show ? (
              <BsEye className="icon" />
            ) : (
              <RiEyeCloseLine className="icon" />
            )}
          </InputRightElement>
        </InputGroup>
        <Center>
          <Button bg='orange.500' size='md' mt={8}>Submit</Button>
        </Center>
      </FormControl>
    </Center>
  )
}

export default Login
