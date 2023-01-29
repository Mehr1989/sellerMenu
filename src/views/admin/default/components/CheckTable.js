import {
  Flex,
  Button,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import feedback0 from "../components/Images/feedback0.jpg"
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
export default function CheckTable(props) {
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
  initialState.pageSize = 11;

  const history = useHistory()
  const redirect = () => {
    history.push('/feedback');
  }

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card>
      <Flex
         bgImage={feedback0}
         bgSize="cover"
         py={{ base: "150px", md: "200px" }}
         px={{ base: "20px", md: "32px" }}
         borderRadius='30px'
      >

      </Flex>

        <Button style={{backgroundColor:"gray",fontSize:"20px",marginTop:"2.3%"}}
        onClick={redirect}
        >نظرات کاربران</Button> 

            
    </Card>
  );
}
