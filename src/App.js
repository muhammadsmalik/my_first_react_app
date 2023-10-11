import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

const App = () => {
  const name = 'John Doe';
  const loading = true;
  const [ counter, setCounter ] = useState(0)


  return (
    <div className="App">
      {/* <p> Hello {loading ? name : 'someone'}</p> */}
      {/* <p> { loading ? `Hello ${name}` : "Hello Mama" } </p> */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1 )}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
    </div>
  );
}

export default App;
