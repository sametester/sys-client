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
    isPerform,
    // profileImg,
    // setProfileImg,
    validateEmailFormat,
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
                  className={`form-control ${
                    !firstName.length && isPerform ? 'border-danger' : ''
                  }`}
                  placeholder="First Name"
                  // required
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                <small
                  style={{ color: 'red' }}
                  className={`${
                    !firstName.length && isPerform ? '' : 'd-none'
                  }`}
                >
                  Firs name is required field
                </small>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="LastName">Last Name :</label>
                <input
                  type="text"
                  className={`form-control ${
                    !lastName.length && isPerform ? 'border-danger' : ''
                  }`}
                  placeholder="Last Name"
                  // required
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />

                <small
                  style={{ color: 'red' }}
                  className={!lastName.length && isPerform ? '' : 'd-none'}
                >
                  Last name is required field
                </small>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="Email">Email :</label>
                <input
                  className={`form-control ${
                    !email.length && isPerform ? 'border-danger' : ''
                  } ${
                    !validateEmailFormat(email) && email.length && isPerform
                      ? 'border-danger'
                      : ''
                  }`}
                  aria-describedby="email"
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <small
                  style={{ color: 'red' }}
                  className={!email.length && isPerform ? '' : 'd-none'}
                >
                  Email is required
                </small>
                <small
                  style={{ color: 'red' }}
                  className={
                    !validateEmailFormat(email) && email.length && isPerform
                      ? ''
                      : 'd-none'
                  }
                >
                  Email format is incorrect
                </small>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="Password">Password :</label>
                <input
                  type="password"
                  className={`form-control ${
                    password.length < 8 && isPerform ? 'border-danger' : ''
                  }`}
                  id="Password"
                  placeholder="Password"
                  // required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <small
                  style={{ color: 'red' }}
                  className={password.length < 8 && isPerform ? '' : 'd-none'}
                >
                  Password must not be less than 8 characters
                </small>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="confirm-password">Confirm Password :</label>
                <input
                  type="password"
                  className={`form-control ${
                    password !== conFirmPassword && isPerform
                      ? 'border-danger'
                      : ''
                  }`}
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  // required
                  value={conFirmPassword}
                  onChange={e => setConFirmPassword(e.target.value)}
                />
                <small
                  style={{ color: 'red' }}
                  className={
                    password !== conFirmPassword && isPerform ? '' : 'd-none'
                  }
                >
                  password is not match
                </small>
              </div>

              <button
                type="submit"
                className="btn btn-primary col-md-12 text-center mb-4 "
                // disabled={!conFirmPassword}
              >
                Sign Up
              </button>

              <div className="mb-4">
                You have an account?
                <Link to="/login" className="text-indigo-500 hover:underline ">
                  Login!
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
