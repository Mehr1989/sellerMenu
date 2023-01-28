// Chakra imports
import {
  Box,
  Flex,
  Text,
  Icon,
  Button,
  useColorModeValue,
  Checkbox,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import Menu from "components/menu/MainMenu";
import IconBox from "components/icons/IconBox";
import { useHistory } from "react-router-dom";


import inventory0 from "../components/Images/inventory0.png"
// Assets
import { MdCheckBox, MdDragIndicator } from "react-icons/md";
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  const history = useHistory()
  const redirect = () => {
    history.push('/test');
  }
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      
        <Flex
          bgImage={inventory0}
          bgSize="cover"
          py={{ base: "150px", md: "200px" }}
          px={{ base: "20px", md: "32px" }}
          borderRadius='30px'
        >
      
        

        </Flex>

<Button style={{backgroundColor:"gray",fontSize:"20px",marginTop:"5%"}} onClick={redirect}>موجودی محصولات</Button>
    </Card>
  );
}
