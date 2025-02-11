import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seeker'); // Default role
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response data
        localStorage.setItem('token', data.token); // Save token

        alert('Login successful!');
        // Redirect based on the role
        if (role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/'); // Default to home page for seekers and helpers
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input input-bordered w-full"
        autoComplete="username"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input input-bordered w-full"
        autoComplete="current-password"
      />

      {/* Role selection */}
      <div>
        <label>
          <input
            type="radio"
            value="seeker"
            checked={role === 'seeker'}
            onChange={(e) => setRole(e.target.value)}
          />
          Seeker
        </label>
        <label>
          <input
            type="radio"
            value="helper"
            checked={role === 'helper'}
            onChange={(e) => setRole(e.target.value)}
          />
          Helper
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Login
      </button>
    </form>
  );
};

export default Login;
