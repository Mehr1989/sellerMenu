import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInventory } from 'redux/slice/inventorySlice'

function Inventory() {
  const {isLoading,error,inventory} = useSelector((state)=> state.inventory)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchInventory())
  },[dispatch])
  return (
    
    <Flex 
  
    bgColor={"brand"}
    py={{ base: "200px", md: "180px" }}
    px={{ base: "20px", md: "32px" }}
    flexDirection="column"
    
    >

    
  {isLoading && <h3>Loading</h3>}
        {error && <h3>something went wrong</h3>}
        <section>
          {inventory && inventory.slice(1,10).map((inventoryData)=>{
            const{id,title,url} = inventoryData
            return(
             <Flex
             
             
            bgColor={"red"}
            py={{ base: "60%", md: "5%" }}
            px={{ base: "100%", md: "2%",xl: "10px", "3xl": "32px"  }}
            flexDirection={"row"}
            
  
    >
      
            
           
              
                <Flex

                   direction='column'
                 w={{ base: "30%", md: "40%" }}
                 me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}
                 
                 bgColor={"green"}
                 justifyContent={"center"}
                 alignItems={"center"}
                 borderRadius={"18px"}
                   
            
                >

                <div key={id} 
                style={{display:"flex"
               ,marginBottom:"10%",padding:"3%",borderRadius:'14px',
               width:"70%" , height:"70%", backgroundColor:"yellow",
               justifyContent:"center"
               

                
                }}>
                   
               <img src={url} alt="meal"></img>
               </div>

              <h6 style={{fontWeight:"bold",fontSize:"25px"}}>{title}:</h6>

                </Flex>
                

              
             
                </Flex>
            )
          })}
        </section>

    </Flex>
  )
}

export default Inventory
