import React from "react";
import Header from "./Header"
export default function StartPage(props){
    return(
    <div className="start--page">
        <Header/>
        <button className="start--test" onClick={props.handleClick}>Start Test</button>
    </div>
       )
}