import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className='counter-title'> 
      <h1>Just a counter</h1>   
      <button className='btn-style' onClick={resetCount}>
          Reset
      </button>
      <div className='align'>
        <p>You clicked <span>{count}</span> times</p>
        <button className='btn-style' onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div> 
    </div>    
  );
}

export default App;