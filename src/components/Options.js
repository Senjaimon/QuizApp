import React from "react"

export default function Options(props){
    const optionCheck=function(){
        if(props.isChecked && props.option===props.correctAnswer){
            return "correct"
        }
        else if(props.isChecked && props.option!=props.correctAnswer)
        {return "wrong"}
        else
        {
            return " "
        }
    }
    return(
        <div className={optionCheck()}>
            <p className={props.isHeld?"selected mcq":"option mcq"} key={props.option} onClick={props.optionClick}>{props.option}</p>
        </div>
    )
}