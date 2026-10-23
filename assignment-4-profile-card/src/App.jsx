import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ProfileCard 
        name="John Doe" 
        image="https://via.placeholder.com/100" 
        description="Frontend Developer passionate about crafting clean and user-friendly web interfaces." 
      />
    </div>
  );
}

export default App;