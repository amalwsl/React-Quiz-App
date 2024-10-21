import { useRef } from "react"
import QUESTIONS from "../Questions"

export default function Answers({answers,selectedAnswer,answerState,handleSelectAnswer}) {

    const shuffledAnswers=useRef()


    if(!shuffledAnswers.current) {
        shuffledAnswers.current=[...answers]
        shuffledAnswers.current.sort(()=> Math.random() -0.5)
    }

   return(
    <ul id="answers" >
    {
        shuffledAnswers.current.map((answer,index)=> {
            const isSelected=selectedAnswer===answer
            let cssClass=""
            if(answerState=="answered"&&isSelected){
                cssClass="selected"
            }
           
            if((answerState=="wrong"||answerState=="correct")&&isSelected){
                console.log("got here in css class")
                cssClass=answerState
            }

            const disabledBtn=(selectedAnswer!="")

            console.log("css class is => ",cssClass,isSelected,answerState)
            console.log('************** answer and selected is => ',answer,selectedAnswer)

            return(
                <li key={index} className="answer" >
                <button onClick={()=> handleSelectAnswer(answer)} disabled={disabledBtn} className={cssClass} >{answer}</button> 
            </li>
            )
        }
        )
    }
</ul>
   )
}