import React from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileImage from './assets/Samruddhi.jpeg';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ProfileCard 
        name="Samruddhi Gawali" 
        image={ProfileImage} 
        description="Frontend Developer passionate about crafting clean and user-friendly web interfaces." 
      />
    </div>
  );
}

export default App;
