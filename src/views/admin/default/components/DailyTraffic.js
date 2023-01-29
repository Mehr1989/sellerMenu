import React from "react";
import order0 from '../components/Images/order0.png'
// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
// Custom components
import Card from "components/card/Card.js";

// Assets


export default function DailyTraffic(props) {
  const { ...rest } = props;
const navigate = useHistory()
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const history = useHistory()
  const redirect = () => {
    history.push('/orders');
  }
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
     <Flex
       bgImage={order0}
       bgSize="contain"
       py={{ base: "150px", md: "200px" }}
       px={{ base: "20px", md: "32px" }}
       borderRadius='30px'>
       
      
     </Flex>
     
     <Button style={{backgroundColor:"gray",fontSize:"20px",marginTop:"5%"}}
     onClick={redirect}
      >سفارشات</Button>
    </Card>
  );
}
