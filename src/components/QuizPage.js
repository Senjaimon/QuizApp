import React from "react"
import Quiz from "./Quiz"
export default function QuizPage(props){
    const  [correctAnswers,setCorrectAnswers]=React.useState(0);

    function countCorrect(){
        setCorrectAnswers(prevCorrectAnswers=>prevCorrectAnswers+1)
    }

    React.useEffect(()=> setCorrectAnswers(0)
    ,[props.quizSet])
    const quizes=props.quizSet.map((quizItem,index)=>{
        if(index!=10){
        const choices=[...quizItem.incorrect_answers];
        const indice=Math.floor(Math.random()*choices.length)
        choices.splice(indice,0,quizItem.correct_answer);
        return(
    <Quiz key={index} question={quizItem.question} correctAnswer={quizItem.correct_answer} choices={choices} isChecked={props.isChecked} countCorrect={countCorrect} quizSet={props.quizSet}/>
    )}}
    )
   return(
       <main>
           {quizes}
           <div className={props.isChecked?"result":""}>
                {props.isChecked && <p className="right--answers">You scored {correctAnswers} /10 correct answers</p>}
                <button className={props.isChecked?"play--again btn":"check--answers btn"} onClick={props.checkAnswers} >{props.isChecked?"Play Again":"Check Answers"}</button>
           </div>
       </main>
   ) 
}