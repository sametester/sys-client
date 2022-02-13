import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import * as localStorageService from '../services/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

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
      navigate('/login');
      notify('Register Success');
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

      notify('Login success');
    } catch (err) {
      console.log(err);
    }
  };

  const notify = message => toast(message);

  //* LOGIN
  const login = async token => {
    await localStorageService.setToken(token);
    setUser(jwtDecode(token));
    setRole('user');
  };

  //* LOGOUT
  const logout = async () => {
    await localStorageService.removeToken();
    setUser(null);
    setRole('guest');
    navigate('/');
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
        user,
        role,
        logout,
        notify,
      }}
    >
      <ToastContainer className={'mt-5'} />
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
