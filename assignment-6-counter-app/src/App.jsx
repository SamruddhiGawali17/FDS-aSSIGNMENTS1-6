import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Counter App</h1>
      <h2>{count}</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', cursor: 'pointer', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ padding: '10px 20px', cursor: 'pointer', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ padding: '10px 20px', cursor: 'pointer', background: '#ffc107', color: '#000', border: 'none', borderRadius: '4px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;