import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/banner02.jpg";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex 
      direction='column'
      bgImage={banner}
      bgSize='cover'
      py={{ base: "30px", md: "128px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'>
      <Text style={{direction:"rtl",marginLeft:"25%",marginBottom:"26%"}}
        fontSize={{ base: "45px", md: "45px" }}
        color='gray'
        mb='14px'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight='700'
        
        lineHeight={{ base: "32px", md: "42px"}}>
         خرید و فروش آسان
      </Text>
      <Text style={{direction:"rtl",marginLeft:'34%'}}
        fontSize='35px'
        color='gray'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight='500'
        mb='40px'
        lineHeight='28px'>
          دریافت مبلغ راحت و سریع
      </Text>
      <Flex align='center' style={{marginLeft:"45%"}}>
        <Button 
          bg='grey'
          color='black'
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight='900'
          fontSize='20px'
          py='20px'
          px='35'
          me='38px'>
          بیشتر بدانید
        </Button>
       
      </Flex>
    </Flex>
  );
}
