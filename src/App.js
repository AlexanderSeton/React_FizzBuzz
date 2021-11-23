import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  let [number,setNumber] = useState(1);
  let [output,setOutput] = useState("");
 
  const handleAdding = () => {
    setNumber(number + 1)
  }

  const determineFizzBuzz = () => {
    if (number % 3 == 0 && number % 5 == 0){
      setOutput("Fizzbuzz")
    }
  }

  useEffect(() => {
    if (number % 3 == 0 && number % 5 == 0){
      setOutput("Fizzbuzz");
    } else if (number % 3 == 0) {
      setOutput("Fizz");
    } else if (number % 5 == 0) {
      setOutput("Buzz");
    } else {
      setOutput(number);
    }
  })

  return (
    <div>
      <h1>Output: {output}</h1>
      <button onClick={handleAdding}>+</button>
      {/* <button onClick={handleMinus}>-</button> */}
      <p>{number}</p>
    </div>
  );
}

export default App;
