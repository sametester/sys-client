import { useNavigate, Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Modal } from 'bootstrap';
import axios from 'axios';
import Spinner from '../utils/Spinner';

function NavbarComponent() {
  const navigate = useNavigate();

  //เก็บรูปใน STATE
  const [imgInput, setImgInput] = useState(null);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const modalEl = useRef();
  const inputEl = useRef();

  const { logout, user, updateUser, userData } = useContext(AuthContext);

  const handleClickProfile = () => {
    const modalObject = new Modal(modalEl.current);
    setModal(modalObject);
    modalObject.show();
  };

  const handleClickUpdate = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('profileImg', imgInput);

      const res = await axios.patch('/users/profile-img', formData);
      updateUser({ profileImg: res.data.profileImg });
      modal.hide();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />};
      <nav className=" navbar navbar-expand-lg p-3 bg-white fs-5 mt-1">
        <div className="container-fluid ">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643800979/See_You_Soon_fymgbr.jpg"
              className="rounded-circle"
              alt="logo"
              width="50px"
              height="50px"
            />
          </Link>
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
                  className="btn btn-secondary btn-lg m-2 fs-5"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Login
                </button>
                <button
                  className="btn btn-secondary btn-lg fs-5 "
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <div
                  className="navbar-brand"
                  role="button"
                  onClick={handleClickProfile}
                >
                  {user ? (
                    <img
                      src={
                        userData.profileImg
                          ? userData.profileImg
                          : 'https://res.cloudinary.com/dwqidrcfo/image/upload/v1645888309/profileImg_mlhalk.jpg'
                      }
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="user"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <button
                  className="btn btn-secondary btn-lg fs-5"
                  onClick={logout}
                >
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="modal" ref={modalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Edit Profile Picture</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setImgInput(null)}
              >
                {/* {' '} */}
              </button>
            </div>

            <div className="modal-body">
              <div className="mt-4 mb-5 d-flex justify-content-center">
                <input
                  type="file"
                  className="d-none"
                  ref={inputEl}
                  onChange={e => {
                    if (e.target.files[0]) setImgInput(e.target.files[0]);
                  }}
                />
                {user ? (
                  <img
                    src={
                      imgInput
                        ? URL.createObjectURL(imgInput)
                        : user.profileImg
                        ? user.profileImg
                        : 'https://res.cloudinary.com/dwqidrcfo/image/upload/v1645888309/profileImg_mlhalk.jpg'
                    }
                    width="200"
                    height="200"
                    className="rounded-circle"
                    alt="user"
                    role="button"
                    onClick={() => inputEl.current.click()}
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <></>
                )}
              </div>

              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!imgInput}
                  onClick={handleClickUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
