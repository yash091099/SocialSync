import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginImage from '../Assets/images/login.png';
import {  useGoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      const base64AuthData = btoa(JSON.stringify(codeResponse));
      navigate(`/auth/login/google?authData=${base64AuthData}`);

    },
    onError: (error) => console.log('Login Failed:', error)
  });



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = () => {
    // Implement your login authentication logic here
    // If authentication is successful, redirect to the dashboard
    const isAuthenticated = true; // Replace with your authentication logic

    if (isAuthenticated) {
      navigate('/main/dashboard');
    } else {
      // Handle login failure, show an error message, etc.
    }
  };
  
   

  return (
    <div className="login-page">
      <div className="image-container">
        <img src={LoginImage} alt='login' />
        <span className='image-container-text'>
          <h2>
            SocialSync makes Social <br />
            media automation
          </h2>
          <p>Manage all your postings in one place.</p>
        </span>

      </div>
      <div className="form-container">
        <span style={{ position: 'relative', bottom: '20vh', left: '17vw', color: '#000000ff' }}>
          <h1>SocialSync</h1>
          <h5>Automate your social media postings</h5>
        </span>
        <h1>Log in</h1>
        <label style={{ position: 'relative', right: '119px' }}>Login for relevant posts</label>
        <input
          type="text"
          placeholder="Enter your Social Sync Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label style={{ position: 'relative', right: '169px' }}>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Login</button>
        <span style={{ position: 'relative', top: '20px' }}>
     
            <button style={{marginBottom:'15px'}} onClick={() => login()}>Sign in with Google 🚀 </button> 
          <br />

          Forgot your password?<br /><br />
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>

        </span>
       
      </div>


    </div>
  );
};

export default LoginPage;
