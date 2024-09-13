import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('/api/signup', { email, password, name });
      alert('Signup successful!');
      // Redirect to login page
    } catch (error) {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Signup</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </div>
      <div className="mt-4">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </div>
      <div className="mt-4">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </div>
      <button onClick={handleSignup} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Signup</button>
    </div>
  );
};

export default Signup;
