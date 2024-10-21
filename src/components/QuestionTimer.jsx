import { useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeOut,mode}) {

    const [remainingTime,setRemainingTime]=useState(timeout)

    useEffect(() => {

        console.log("timer changes")
       const timer= setTimeout( ()=>{
        onTimeOut()
       }
        , timeout);

        return () => {
            clearTimeout(timer)

           
          }
    }, [timeout,onTimeOut])
    

   useEffect(() => {
    console.log("interval started")
   const interval= setInterval(() => {
        console.log("interval")
        setRemainingTime(prev=>prev-10)
    }, 10);

    return () => {
        clearInterval(interval)
      }

   }, [])

 
   
   

    return(
        <progress id="question-time" value={remainingTime} max={timeout} className={mode}  />
    )
}