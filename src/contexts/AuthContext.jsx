import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import * as localStorageService from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conFirmPassword, setConFirmPassword] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(localStorageService.getRole());

  const handleSubmitRegister = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/register', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword: conFirmPassword,
        // profileImg,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConFirmPassword('');
      setProfileImg('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/login', {
        email,
        password,
      });

      login(res.data.token);

      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  const login = async token => {
    localStorageService.setToken(token);
    setUser(jwtDecode(token));
    setRole('user');
  };

  return (
    <AuthContext.Provider
      value={{
        handleSubmitRegister,
        handleSubmitLogin,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        conFirmPassword,
        setConFirmPassword,
        profileImg,
        setProfileImg,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
