// import RegisterForm from '../components/auth/RegisterForm';

import { useContext } from 'react';
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

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">REGISTER</h2>

          <form onSubmit={handleSubmitRegister}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Firstname"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Lastname</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Lastname"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                required
                value={conFirmPassword}
                onChange={e => setConFirmPassword(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
