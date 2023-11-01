import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSignup = () => {
    // Implement your user registration logic here
    // If registration is successful, you can redirect to the login page
    const isRegistrationSuccessful = true; // Replace with your logic

    if (isRegistrationSuccessful) {
      navigate('/auth/login'); // Use navigate to redirect to the login page
    } else {
      // Handle registration failure, show an error message, etc.
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>Have an account? <Link to="/auth/login">Login</Link></p>

    </div>
  );
};

export default SignupPage;
