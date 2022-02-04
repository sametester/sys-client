import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function NavbarComponent() {
  const navigate = useNavigate();

  const { logout, user } = useContext(AuthContext);

  return (
    <nav
      className=" navbar navbar-expand-lg p-3 bg-white text-dark  "
      style={{
        marginTop: '0px',
        height: '15vh',
        fontSize: '18px',
      }}
    >
      <div className="container-fluid ">
        <a href="/">
          <img
            src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643800979/See_You_Soon_fymgbr.jpg"
            alt="logo"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className="collapse navbar-collapse " id="navbarText ">
          {/* *** */}
          <ul
            className="navbar-nav me-auto  nav nav-tabs"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to={'/review'}>
                Review
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {!user ? (
            <>
              <button
                className="btn btn-secondary  btn-lg m-2"
                style={{ fontSize: '18px' }}
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </button>
              <button
                className="btn btn-secondary btn-lg "
                style={{ fontSize: '18px' }}
                onClick={() => {
                  navigate('/register');
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="btn btn-secondary  btn-lg"
              style={{ fontSize: '18px' }}
              onClick={logout}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
