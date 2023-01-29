import React from 'react'
import { Flex } from '@chakra-ui/react'

function Feedback() {
  return (
    <Flex
    bgColor={"blue"}
    py={{ base: "150px", md: "200px" }}
    px={{ base: "20px", md: "32px" }}
    borderRadius='30px'
    >
        <h1>hello world</h1>
    </Flex>
  )
}

export default Feedback
