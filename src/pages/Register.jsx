// import RegisterForm from '../components/auth/RegisterForm';

import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    profileImg,
    setProfileImg,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAlreadyClick = e => {
    navigate('/login');
    console.log(555);
  };

  return (
    <>
      <NavbarComponent />;
      <div className="container">
        <div className="row mt-0">
          <div className="col-12 col-md-6 offset-md-3 ">
            <h2 className="my-4 text-center">REGISTER</h2>

            <form onSubmit={handleSubmitRegister}>
              <div className="form-group">
                <label htmlFor="exampleInputFirstName">First Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="exampleInputLastName">Last Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="exampleInputEmail">Email :</label>
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
              <br />

              <div className="form-group">
                <label htmlFor="exampleInputPassword">Password :</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password :</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword"
                  placeholder="Confirm Password"
                  required
                  value={conFirmPassword}
                  onChange={e => setConFirmPassword(e.target.value)}
                />
              </div>
              <br />

              {/* <button
                type="button"
                className="btn btn-success "
                onClick={handleAlreadyClick}
              >
                Already have an account?
              </button> */}

              <button
                type="submit"
                className="btn btn-primary col-md-12 text-center"
                // style={{ marginLeft: '10px' }}
              >
                Sign Up
              </button>
              <br />
              <br />
              <div>
                {' '}
                You have an account?{' '}
                <a href="/login" class="text-indigo-500 hover:underline">
                  Login!{' '}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
