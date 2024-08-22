import React from 'react';
import './GoogleLogin.css';
import logo from './image.png';
import GoogleButton from 'react-google-button';

const GoogleLogin = () => {
  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://localhost:3001',
        {
          method: 'GET',
          redirect: 'manual',
        }
      );

      if (response.ok) {
        const redirectUrl = response.url;
        window.location.href = redirectUrl;
      } else {
        console.error('Login failed:', response.status, response.statusText);
        const responseBody = await response.text();
        console.error('Response body:', responseBody);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <div className="page-container">
      <header className="navbar">
        <img src={logo} alt="ReachInbox Logo" className="navbar-logo" />
      </header>
      <main className="google-login-container">
        <div className="google-login-card">
          <h2>Create a new account</h2>
          <GoogleButton className='google-login-button' onClick={handleLogin} />
          <button className="account-button">Create an Account</button>
          <p>Already have an account? <a href="#">Sign In</a></p>
        </div>
      </main>
      <footer className="footer">
        &copy; 2023 ReachInbox. All rights reserved.
      </footer>
    </div>
  );
};

export default GoogleLogin;
