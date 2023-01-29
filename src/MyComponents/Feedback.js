import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeedback } from 'redux/slice/feedbackSlice'
function Feedback() {
  const {isLoading,error,feedback} = useSelector((state)=> state.feedback)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchFeedback())
  },[dispatch])
  return (
    
    <Flex
  
    bgColor={"brand"}
    py={{ base: "200px", md: "180px" }}
    px={{ base: "20px", md: "32px" }}
  
    >

    
  {isLoading && <h3>Loading</h3>}
        {error && <h3>{error.message}</h3>}
        <section>
          {feedback && feedback.slice(1,10).map((feedbackData)=>{
            const{body,id,name} = feedbackData
            return(
              <Flex key={id}
         
              direction='column'
            w={{ base: "30%", md: "50%" }}
            me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}
            
           
              >
                
                <div 
                style={{backgroundColor:" rgb(131, 158, 201)",display:"flex"
                ,flexDirection:"column",marginBottom:"10%",padding:"3%",borderRadius:'14px',

                
                }}>
                     <h2 style={{fontWeight:"bold",fontSize:"30px"}}>{name}:</h2>
                <p>{body}</p>


                </div>
             
              </Flex>
            )
          })}
        </section>

    </Flex>
  )
}

export default Feedback
