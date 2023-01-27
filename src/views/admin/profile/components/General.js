// Chakra imports
import { EditIcon } from "@chakra-ui/icons";
import {  Text, useColorModeValue, Icon } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";

import React from "react";


// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  
 
  return (
    <Card mb={{ base: "0px", "2xl": "20px" } }{...rest} >
      <Text style={{direction:"rtl"}}
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        خلاصه مشخصات کاربری
        <Icon as={EditIcon} w='40px' h='40px' mr={"2%"} style={{cursor:"pointer"}} className={"editIcon"} />

      </Text>

      
      <Text color={textColorSecondary} fontSize='22px' me='26px' mb='40px' style={{direction:"rtl"}}>
               خانم سارا احمدی به مدت دو سال است که در بخش مدیریت
               رستوران فعالیت می کند
      </Text>
    

     
    </Card>
  );
}
