import { useState } from "react"
import QUESTIONS from "../Questions"
import Answers from "./Answers"
import QuestionTimer from "./QuestionTimer"



export default function Questions({index,userAnswers,handleSkipAnswer,onSelectAnswer}) {
   
    let timer=15000

    const [answer,setAnswer]=useState({
        selectedAnswer:"",
        isCorrect:null,
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer:answer,
                isCorrect:QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000);
        }, 1000);
    }

    let answerState = ""

    if(answer.selectedAnswer&&answer.isCorrect==null){
        answerState="answered"
    }

    if(answer.selectedAnswer&&answer.isCorrect!=null){
        answerState=answer.isCorrect?'correct':'wrong'
    }

    if(answer.selectedAnswer!=""){
        timer=3000
    }


    console.log("selected Answer is => ",answer.isCorrect ,answerState )

  
   
    return(
    <>
        <QuestionTimer timeout={timer} onTimeOut={answer.selectedAnswer? null:handleSkipAnswer} mode={answerState} key={timer} />

        <h2>
            {QUESTIONS[index].text}
        </h2>

        <Answers 
          answerState={answerState} 
          handleSelectAnswer={handleSelectAnswer} 
          selectedAnswer={answer.selectedAnswer}
          answers={QUESTIONS[index].answers}
        
          />
    </>
   )
}