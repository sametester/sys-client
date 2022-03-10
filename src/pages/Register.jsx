import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from '../components/layouts/NavbarComponent';
import { AuthContext } from '../contexts/AuthContext';

function Register() {
  const {
    handleSubmitRegister,
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
    // profileImg,
    // setProfileImg,
  } = useContext(AuthContext);

  return (
    <>
      <NavbarComponent />;
      <div className="container ">
        <div className="row mt-0 ">
          <div className=" col-12 col-md-4 offset-md-3  ">
            <h2 className="my-4 text-center">REGISTER</h2>

            <form onSubmit={handleSubmitRegister}>
              <div className="form-group mb-3">
                <label htmlFor="FirstName">First Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="LastName">Last Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="Email">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="Password">Password :</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="confirm-password">Confirm Password :</label>
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  required
                  value={conFirmPassword}
                  onChange={e => setConFirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary col-md-12 text-center mb-4 "
                disabled={!conFirmPassword}
              >
                Sign Up
              </button>

              <div className="mb-4">
                You have an account?{' '}
                <Link to="/login" className="text-indigo-500 hover:underline ">
                  Login!{' '}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
