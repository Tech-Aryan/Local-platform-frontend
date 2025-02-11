import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <p className="text-lg font-semibold">Task Connect</p>
        <p>Connect with your Seeker</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800">
          <i class="fa-solid fa-envelope"></i> Gmail
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800">
          <i class="fa-brands fa-facebook"></i> facebook
          </a>
        </div>
        <p className="text-sm mt-4">© 2025 Task Connect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
