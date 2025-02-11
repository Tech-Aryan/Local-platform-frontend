import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState(''); // Changed from 'name'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact_no, setContactNo] = useState('');
  const [role, setRole] = useState('seeker'); // Default role
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/signup `, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, contact_no, role }), // Updated 'name' to 'username'
      });

      if (response.ok) {
        alert('Signup successful!');
        navigate('/login'); // Redirect to login
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Signup</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="input input-bordered w-full"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input input-bordered w-full"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Contact Number"
        value={contact_no}
        onChange={(e) => setContactNo(e.target.value)}
        required
        className="input input-bordered w-full"
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
        Signup
      </button>
    </form>
  );
};

export default Signup;
