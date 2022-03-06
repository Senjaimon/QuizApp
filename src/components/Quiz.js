import React from "react"
import Options from "./Options"
export default function Quiz(props)
{
    const [option,setOption]=React.useState([]);

    function optionClick(id)
    {
        if(id===props.correctAnswer){
            props.countCorrect();
        }
        if(!props.isChecked){
        setOption((option)=>option.map((ans)=>
        (ans.choice===id)?{...ans,isHeld:!ans.isHeld}:{...ans,isHeld:false}))}
    }
    
    React.useEffect(()=>
        setOption(props.choices.map((choice)=>{
            return(
                {choice:choice,
                isHeld:false}
            )
        })),[props.quizSet])
    const options=option.map((ans)=><Options option={ans.choice} key={ans.choice} optionClick={()=>optionClick(ans.choice)} isHeld={ans.isHeld} correctAnswer={props.correctAnswer} isChecked={props.isChecked}/>);
    return(
    <div className="quiz">
        <p className="question">{props.question}</p>
        <div className="options">{options}</div>
    </div>)
}