import { Flex } from '@chakra-ui/react'
import React from 'react'

function Test() {
  return (
   <Flex
   bgColor={"red"}
   py={{ base: "150px", md: "200px" }}
   px={{ base: "20px", md: "32px" }}
   borderRadius='30px'
   >
     <h2>hello world</h2>
   </Flex>
   
  )
}

export default Test
