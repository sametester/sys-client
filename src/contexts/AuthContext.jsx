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
  const [userData, setUserData] = useState('');
  const [isPerform, setIsPerform] = useState(false);

  const token = localStorageService.getToken('token');

  const notify = message => toast(message);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorageService.getToken('token');
    if (token) {
      setUser(jwtDecode(token));
      axios
        .get('/users/me')
        .then(res => setUser(res.data.user))
        .catch(err => console.log(err));
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [token]);

  const handleSubmitRegister = async e => {
    e.preventDefault();
    try {
      setIsPerform(true);
      const res = await axios.post('/users/register', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword: conFirmPassword,
        profileImg,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConFirmPassword('');
      setProfileImg('');
      navigate('/login');
      setIsPerform(false);
      notify('Register Success');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitLogin = async e => {
    e.preventDefault();
    try {
      setIsPerform(true);

      const res = await axios.post('/users/login', {
        email,
        password,
      });

      login(res.data.token);
      setIsPerform(false);
      setEmail('');
      setPassword('');
      notify('Login success');
    } catch (err) {
      notify('Login fail email or password is incorrect');
      console.log(err);
    }
  };

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
    notify('Logout success');
    setRole('guest');
    navigate('/');
  };

  const updateUser = value => {
    setUser(prev => ({ ...prev, ...value }));
  };

  const fetchUser = async () => {
    if (token) {
      const a = jwtDecode(token);
      const res = await axios.get(`/users/getMyData/${a.firstName}`);
      setUserData(res.data.user);
    }
  };

  const validateEmailFormat = value => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      return true;
    return false;
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
        login,
        logout,
        updateUser,
        notify,
        userData,
        fetchUser,
        isPerform,
        validateEmailFormat,
      }}
    >
      <ToastContainer className={'mt-5'} />
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
