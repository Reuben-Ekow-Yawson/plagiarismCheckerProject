import { Box, Button, Center, Flex, FormControl, Heading, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import { useState, React } from "react"


const Home = () => {
    const [textarea, setTextarea] = useState('')
   
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }
  return (
    <Center mt='10' >
      <Box w='100%' align='center'>
        
        {/* This is the heading of the landing page */}
        
        <Box border='10px red solid'>
          <Heading fontFamily='sans' as='h1' size='4xl'>Plagiarism Checker</Heading>
          <Text fontFamily='sans' fontSize='22' align='center' mb={2} >To use this tool, copy-paste 
          text or select a file to upload. Next, click on the Check Plagiarism button to find plagiarism 
          percentage. </Text>
          
          <Flex flexDirection='column' border='10px red solid' justifyContent='center'>
            <FormControl isRequired >
                <Input id='document-name'  w='80vh' placeholder='Document name' />
            </FormControl>
            <FormControl mt='4'>
                <Input id='document-description des' w='80vh' placeholder='Document Description' />
            </FormControl>
            <FormControl isRequired mt='4'>
                <Input id='document-author' w='80vh' placeholder='Document Author' />
            </FormControl>
            <FormControl>
                <Textarea mt='4' isRequired value={textarea} onChange={handleChange} w='80vh'h='20vh'  placeholder='Drop copied text here' />
            </FormControl>
            
          </Flex>
          

          <Flex alignItems='center' justifyContent='center'  m='10'>
            <Button color='black' mr='4' size='lg' bg='lightblue' border='1px soild red'>
                Upload file
            </Button>

            {/* Server Button */}
            <Button color='black' mr='4' size='lg' bg='lightblue' border='1px soild red'>
                Check
            </Button>

            {/* Web Button */}
            <Button color='black' size='lg' bg='lightblue' border='1px soild red'>
                Check from Web
            </Button>
          </Flex>
          
        </Box>
      </Box>
    </Center>
  )
}

export default Home
