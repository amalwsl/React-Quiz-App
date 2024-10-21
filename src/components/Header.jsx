import LogoQuiz from "../assets/quiz-logo.png"

export default function Header(params) {
    return(
     <header>
        <img src={LogoQuiz} alt="quiz-logo"  />
        <h1>React Quiz</h1>
     </header>
    )
 }