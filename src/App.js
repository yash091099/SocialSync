import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import LoginWithGoogle from './Pages/LoginWithGoogle';

const isAuthenticated = false; // Replace with your actual authentication logic

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={isAuthenticated ? <Navigate to="/main/dashboard" /> : <LoginPage />} />
        <Route path="/auth/signup" element={isAuthenticated ? <Navigate to="/main/dashboard" /> : <SignupPage />} />
        <Route path="/auth/login/google" element={isAuthenticated ? <Navigate to="/main/dashboard" /> : <LoginWithGoogle />} />
        <Route path="/main/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth/login" />} />
        <Route index element={<Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
