import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  let [number,setNumber] = useState(1);
  let [output,setOutput] = useState("");
  let [score,setScore] = useState(0);
 
  const handleAdding = () => {
    setNumber(number + 1)
  }

  const handleMinus = () => {
    if (number > 1){
      setNumber(number - 1)
    }
  }

  const handleAddingScore = () => {
    setScore(score + 1);
  };

  const handleReset = () => {
    setScore(0);
    setNumber(1);
  }

  useEffect(() => {
    console.log("Trigger")
    if (number % 3 === 0 && number % 5 === 0){
      setOutput("Fizzbuzz");
    } else if (number % 3 === 0) {
      setOutput("Fizz");
    } else if (number % 5 === 0) {
      setOutput("Buzz");
    } else {
      setOutput(number);
    }
  },[number])

  return (
    <div>
      <h1>Output: {output}</h1>
      <button onClick={handleAdding}>+</button>
      <button onClick={handleMinus}>-</button>
      
      <p>{number}</p>
      <button onClick={handleAddingScore}>Correct</button>
      <button onClick={handleReset}>Reset</button>

      <p>ScoreTally: {score}</p>
    </div>
  );
}

export default App;
