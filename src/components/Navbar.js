import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    'All', 'Technology', 'Marketing', 'Design', 'Writing',
    'Mechanic', 'Electrician', 'Plumber', 'Photography',
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    const adminToken = localStorage.getItem('adminToken');
    setIsAuthenticated(!!token);
    setIsAdmin(!!adminToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setIsAdmin(false);
    window.location.reload();
    navigate('/');
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (location.pathname === '/tasks') {
      navigate(`/tasks?category=${event.target.value}`);
    }
  };

  return (
    <nav className="bg-base-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-800">
            Task Platform
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {location.pathname === '/tasks' && (
              <select
                className="select select-bordered"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}

            {!isAuthenticated && !isAdmin ? (
              <>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-secondary">
                  Signup
                </Link>
                <Link to="/admin/login" className="btn btn-warning">
                  Admin Login
                </Link>
              </>
            ) : isAdmin ? (
              <>
                <Link to="/dashboard/admin" className="btn btn-accent">
                  Admin Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-error">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-error">
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-600 hover:text-gray-900 hover:border-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 p-4 bg-base-100 shadow-lg">
            {location.pathname === '/tasks' && (
              <select
                className="select select-bordered w-full"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}

            {!isAuthenticated && !isAdmin ? (
              <>
                <Link to="/login" className="btn btn-primary w-full">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-secondary w-full">
                  Signup
                </Link>
                <Link to="/admin/login" className="btn btn-warning w-full">
                  Admin Login
                </Link>
              </>
            ) : isAdmin ? (
              <>
                <Link to="/dashboard/admin" className="btn btn-accent w-full">
                  Admin Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-error w-full">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-error w-full">
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
