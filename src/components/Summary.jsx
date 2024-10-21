import CompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from "../Questions"


export default function Summary({userAnswers}) {

    const allAnswers=userAnswers.length
    const skippedAnswers=userAnswers.filter((answer)=>answer===null).length
    const correctAnswers=userAnswers.filter((answer,index)=>answer===QUESTIONS[index].answers[0]).length

    const skippedAnswersShare=Math.round((skippedAnswers/allAnswers) * 100)
    const correctAnswersShare=Math.round((correctAnswers/allAnswers) * 100)
    const wrongAnswersShare=100-skippedAnswersShare-correctAnswersShare




    return(
        <div id="summary" >
        <img src={CompleteImg} alt="quiz-complete" />
        <h2>Quiz is completed</h2>
        <div id='summary-stats' >
            <p>
                <span className='number' >{skippedAnswersShare}%</span>
                <span className='text' >Skipeed</span>
            </p>
            <p>
                <span className='number' >{correctAnswersShare}%</span>
                <span className='text' >Correctly answered Questions</span>
            </p>
            <p>
                <span className='number' >{wrongAnswersShare}%</span>
                <span className='text' >Incorrectly answered Questions</span>
            </p>
            
        </div>
        <ol>
               {
                userAnswers.map((answer,index)=>{

                    let cssClass="user-answer"
                    if (answer===null){
                        cssClass+=" skipped"
                    }else if( answer==QUESTIONS[index].answers[0]){
                        cssClass+=" correct"
                    }else{
                        cssClass+=" wrong"
                    }

                    return(
                    <li key={index} >
                        <h3> {index+1} </h3>
                        <p className='question' >{QUESTIONS [index].text}</p>
                        <p className={cssClass} > {answer??"Skipped"} </p>
                    </li>
                    )
                })
               }
            </ol>
    </div>
    )
}