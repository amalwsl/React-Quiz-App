import { useCallback,  useState } from "react"
import QUESTIONS from "../Questions"
import CompleteImg from '../assets/quiz-complete.png'
import Questions from "./Questions"
import Summary from "./Summary"



export default function Quiz(params) {
    const [userAnswers,setUserAnswers]=useState([])
    const quizIsCompleted=userAnswers.length===QUESTIONS.length

    const activeQuestionIndex= userAnswers.length 

    const handleSelectAnswer=useCallback( function handleSelectAnswer(selectedAnswer){
        console.log("answer selected => ",selectedAnswer)
        setUserAnswers(prev=>{return [...prev,selectedAnswer] })
       
     
    } ,[])

    const handleSkipAnswer= useCallback(
        () => handleSelectAnswer(null),
        [],
      )



    if(quizIsCompleted){
        return(
            <Summary userAnswers={userAnswers} /> 
        )
    }

     


    console.log("user answers are ",userAnswers,quizIsCompleted)

   return(
    <div id="quiz" >
        <div id="question" >

           <Questions 
          userAnswers={userAnswers} 
          onSelectAnswer={handleSelectAnswer} 
          key={activeQuestionIndex}
          handleSkipAnswer={handleSkipAnswer}
          index={activeQuestionIndex}
          />
        </div>  

         
    </div>
   )
}