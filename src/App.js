import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  let [number,setNumber] = useState(1);
  let [output,setOutput] = useState("");
  let [score,setScore] = useState(0);
  let [time, setTime] = useState(5)
 
  // const handleAdding = () => {
  //   setNumber(number + 1)
  // }

  // const handleMinus = () => {
  //   if (number > 1){
  //     setNumber(number - 1)
  //   }
  // }

  // const handleAddingScore = () => {
  //   setScore(score + 1);
  // };

  // useEffect(() => {
  //   countDown();
  // },[number])

  // const timeReduce = () => {
  //   setTime(time - 1);
  //   console.log("TIME:", time);
  //   if (time == 0){
  //     handleReset();
  //   }
  // }



  // const countDown = () => {
  //   for (let i = 0; i < 5; i++){
  //     wait(1000).
  //     setTime(time - 1);
  //     timerCheck();
  //   }
  // }

  // const timerCheck = () => {
  //   if (time == 0) {
  //     handleReset();
  //   }
  // }

  const calculateScore = (event) => {
    const answer = event.target.value;
    if (output == answer){
      setScore(score + 1);
      setNumber(number + 1);
    } else {
      handleReset()
    }

  }

  const handleReset = () => {
    setScore(0);
    setNumber(1);
    setTime(5);
  }

  useEffect(() => {
    console.log("Trigger")
    setInterval(function(){
      setTime(time - 1);
      console.log("TIME:", time);
      if (time == 0){
        handleReset();
      }}, 1000);
    if (number % 3 === 0 && number % 5 === 0){
      setOutput("FizzBuzz");
    } else if (number % 3 === 0) {
      setOutput("Fizz");
    } else if (number % 5 === 0) {
      setOutput("Buzz");
    } else {
      setOutput(number);
    }
  },[number]);

  return (
    <div>
      {/* <h1>Output: {output}</h1> */}
      {/* <button onClick={handleAdding}>+</button>
      <button onClick={handleMinus}>-</button> */}
      <p>Countdown..{time}</p>
      <p>{number}</p>
      {/* <button onClick={handleAddingScore}>Correct</button> */}
      <button value="Fizz" onClick={calculateScore}>Fizz</button>
      <button value="Buzz" onClick={calculateScore}>Buzz</button>
      <button value="FizzBuzz" onClick={calculateScore}>FizzBuzz</button>
      <button value={number} onClick={calculateScore}>Number</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>

      <p>Score Tally: {score}</p>
    </div>
  );
}

export default App;
