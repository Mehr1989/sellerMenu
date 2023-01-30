import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInventory } from 'redux/slice/inventorySlice'
import { identifier } from 'stylis'
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
  
    >

    
  {isLoading && <h3>Loading</h3>}
        {error && <h3>something went wrong</h3>}
        <section>
          {inventory && inventory.slice(1,10).map((inventoryData)=>{
            const{id,title,url} = inventoryData
            return(
              <Flex 
          
              direction='column'
            w={{ base: "30%", md: "50%" }}
            me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}
            
           
              >
                
                <div key={id}
                style={{backgroundColor:" rgb(131, 158, 201)",display:"flex"
                ,flexDirection:"column",marginBottom:"10%",padding:"3%",borderRadius:'14px',

                
                }}>
                   
               <img src={url} alt="meal"></img>
               </div>

              <h2 style={{fontWeight:"bold",fontSize:"30px"}}>{title}:</h2>

              
             
              </Flex>
            )
          })}
        </section>

    </Flex>
  )
}

export default Inventory
