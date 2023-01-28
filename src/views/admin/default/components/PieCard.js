// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue,Button } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import balance1 from "../components/Images/balance1.png"

import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        bgImage={balance1}
        bgSize="cover"
        py={{ base: "150px", md: "200px" }}
        px={{ base: "20px", md: "32px" }}
        borderRadius='30px'
      >
    
  
      </Flex>
      <Button style={{backgroundColor:"gray",fontSize:"20px",marginTop:"5%"}}>کیف پول</Button>
       

      
        
             
    </Card>
  );
}
