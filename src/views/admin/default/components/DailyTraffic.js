import React from "react";
import order0 from '../components/Images/order0.png'
// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";


// Custom components
import Card from "components/card/Card.js";

// Assets


export default function DailyTraffic(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
     <Flex
       bgImage={order0}
       bgSize="contain"
       py={{ base: "150px", md: "200px" }}
       px={{ base: "20px", md: "32px" }}
       borderRadius='30px'>
       
      
     </Flex>
     
     <Button style={{backgroundColor:"gray",fontSize:"20px",marginTop:"5%"}}>سفارشات</Button>
    </Card>
  );
}
