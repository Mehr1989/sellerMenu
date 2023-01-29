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
    py={{ base: "350px", md: "550px" }}
    px={{ base: "20px", md: "32px" }}
    borderRadius='30px'
    >

     
  {isLoading && <h3>Loading</h3>}
        {error && <h3>Something Went Wrong</h3>}
        <section>
          {feedback && feedback.slice(1,10).map((feedbackData)=>{
            const{body,id,name} = feedbackData
            return(
              <Flex key={id}>
                <h3>{name}:</h3>
                <p>{body}</p>

              </Flex>
            )
          })}
        </section>

    </Flex>
  )
}

export default Feedback
