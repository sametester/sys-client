import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NavbarComponent from '../components/layouts/NavbarComponent';

function Login() {
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
                <label htmlFor="Email">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="Password">Password :</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary col-md-12 text-center mb-4"
                // disabled={!password}
              >
                Login
              </button>

              <div>
                Create new account?
                <Link
                  to="/register"
                  className="text-indigo-500 hover:underline"
                >
                  Sign up!
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
