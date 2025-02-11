import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            Welcome to Task Platform
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Find or Post tasks easily in various categories
          </p>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => navigate('/post-task')}
              className="btn btn-primary px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              Seeker
            </button>
            <button
              onClick={() => navigate('/tasks')}
              className="btn btn-secondary px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              Helper
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
