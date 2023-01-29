import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import us0 from "../components/Images/us0.jpg"
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";


// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function ColumnsTable(props) {

  const history = useHistory()
  const redirect = () => {
    history.push('/guidance');
  }
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
>
    
      
      <Flex  px='25px' justify='space-between' mb='10px' align='center' justifyContent="center"
        bgImage={us0}
        bgSize="88%"
        py={{ base: "150px", md: "200px" }}
        px={{ base: "150px", md: "200px" }}
        borderRadius='30px'
      >
        
     
      
      </Flex>
     
                          
     <Button style={{backgroundColor:"gray",fontSize:"20px",marginTop:"1.5%"}}onClick={redirect}
      >راهنمای استفاده</Button>              
    </Card>
  );
}
