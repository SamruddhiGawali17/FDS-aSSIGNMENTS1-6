import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Controlled Form</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          name="username" 
          placeholder="Enter Username" 
          value={formData.username} 
          onChange={handleChange} 
          style={{ padding: '8px' }}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Enter Email" 
          value={formData.email} 
          onChange={handleChange} 
          style={{ padding: '8px' }}
        />
        <textarea 
          name="bio" 
          placeholder="Enter Bio" 
          value={formData.bio} 
          onChange={handleChange} 
          style={{ padding: '8px' }}
        />
      </form>

      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h3>Real-time Preview</h3>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Bio:</strong> {formData.bio}</p>
      </div>
    </div>
  );
}

export default App;