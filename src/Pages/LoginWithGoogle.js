import React, { useState, useEffect } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

const LoginWithGoogle = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const base64AuthData = searchParams.get('authData');

  useEffect(() => {
    if (base64AuthData) {
      const authData = JSON.parse(atob(base64AuthData));
      setUser(authData);
    }
  }, [base64AuthData]);

  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
            console.log(res.data)
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    navigate('/auth/login')
    
  };

  return (
    <div>
      {profile?.email && (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default LoginWithGoogle;
