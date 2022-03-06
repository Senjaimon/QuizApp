import logo from './logo.svg';
import './App.css';
import React from "react"
import StartPage from "./components/StartPage"
import QuizPage from './components/QuizPage';
function App() {
  const [page,setPage]=React.useState(true);
  const [quizSet,setQuizSet]=React.useState([]);
  const [isChecked,setIsChecked]=React.useState(false);;
  function checkAnswers()
  { 
    if(isChecked){
      fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res)=>res.json())
      .then((data)=>setQuizSet(data.results));
      setPage(prevPage=>!prevPage)
    }
    
    setIsChecked(prevIsChecked=>!prevIsChecked);
  }
  React.useEffect(()=>
    {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((res)=>res.json())
        .then((data)=>setQuizSet(data.results));
    },[])
  function changePage(){
    setPage((prevPage)=>!prevPage)
  }
    return (
    <div className="App">
      {page && <StartPage handleClick={()=>{changePage()}}/>}
      {quizSet.length===0?!page&&<p className='loading'>LOADING. . .</p>:!page && <QuizPage quizSet={quizSet} checkAnswers={()=>{checkAnswers()}} isChecked={isChecked}/>}
    </div>
  );
}

export default App;
