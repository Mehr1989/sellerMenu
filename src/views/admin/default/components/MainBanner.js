import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/banner01.jpg";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex 
      direction='column'
      bgImage={banner}
      bgSize="cover"
      
      py={{ base: "30px", md: "60px" }}
      px={{ base: "20px", md: "32px" }}
      borderRadius='30px'>
      <Text style={{direction:"rtl",marginLeft:"18%",marginBottom:"26%"}}
        fontSize={{ base: "6ex", md: "6ex" }}
        fontWeight="600"
        color='black'
        mb='14px'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        
        lineHeight={{ base: "32px", md: "42px" }}>
         
      </Text>
      <Text style={{direction:"rtl",marginLeft:'30%',marginBottom:'30%'}}
        fontSize='35px'
        fontWeight="900"
        color='Black'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        
        mb='40px'
        lineHeight='28px'>
          
      </Text>
      <Flex align='center' style={{marginLeft:"45%"}}>
     
       
      </Flex>
    </Flex>
  );
}
