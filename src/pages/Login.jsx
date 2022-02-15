// import LoginForm from '../components/auth/LoginForm';
// import { Toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NavbarComponent from '../components/layouts/NavbarComponent';

function Login() {
  const navigate = useNavigate();

  const { handleSubmitLogin, email, setEmail, password, setPassword } =
    useContext(AuthContext);

  return (
    <>
      <NavbarComponent />;
      <div className="container">
        <div className="row mt-4">
          <div className="   col-12 col-md-4 offset-md-3">
            <h2 className="my-4 text-center">LOGIN</h2>

            <form onSubmit={handleSubmitLogin}>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="exampleInputPassword1">Password :</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary col-md-12 text-center mb-4"
              >
                Login
              </button>

              {/* <button
                type="button"
                className="btn btn-success"
                style={{ marginLeft: '10px' }}
                onClick={() => navigate('/register')}
              >
                Create New Account
              </button> */}

              <div>
                {' '}
                Create new account?{' '}
                <Link
                  to="/register"
                  className="text-indigo-500 hover:underline"
                >
                  Sign up!{' '}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// {
//   /* <LoginForm />; */
// }

// <form>
//   <div className="form-inner">
//     <h2>เข้าสู่ระบบ</h2>
//   </div>

//   <div className="form-group" style={{}}>
//     <label htmlFor="email">Email: </label>
//     <input type="email" name="email" id="email" />
//   </div>

//   <div className="form-group">
//     <label htmlFor="password">Password: </label>
//     <input type="password" name="password" id="password" />
//   </div>
//   <label>
//     <input type="checkbox" name="remember" /> Remember me
//   </label>
//   <br />
//   <button type="submit">Login</button>
// </form>
