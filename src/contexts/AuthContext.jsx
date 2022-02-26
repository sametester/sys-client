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

    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser(jwtDecode(token));
            axios
                .get('/users/me')
                .then((res) => setUser(res.data.user))
                .catch((err) => console.log(err));
        }
    }, []);

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
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
            notify('Register Success');
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmitLogin = async (e) => {
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

    const notify = (message) => toast(message);

    //* LOGIN
    const login = async (token) => {
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

    const updateUser = (value) => {
        setUser((prev) => ({ ...prev, ...value }));
    };

    const fetchUser = async () => {
        const a = jwtDecode(token);
        console.log(a.firstName);
        const res = await axios.get(`/users/getMyData/${a.firstName}`);
        setUserData(res.data.user);
        console.log(res.data.user);
    };

    useEffect(() => {
        fetchUser();
    }, [token]);

    if (!userData) {
        return <></>;
    }

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
            }}
        >
            <ToastContainer className={'mt-5'} />
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
export { AuthContext };
