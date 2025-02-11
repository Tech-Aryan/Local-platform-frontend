import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for hardcoded credentials
    if (email === 'admin@admin.com' && password === '12345') {
      // Store admin token in localStorage
      localStorage.setItem('adminToken', 'your-admin-token');  // Store a dummy token

      // Redirect to admin dashboard
      navigate('/dashboard/admin');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-lg bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-center">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Password Input */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-error text-sm mb-4">{error}</p>}

            {/* Login Button */}
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
