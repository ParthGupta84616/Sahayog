import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard or home page
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Login</h1>
      <div>
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
      <button onClick={handleLogin} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
};

export default Login;
