import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NavbarComponent from '../components/layouts/NavbarComponent';
import '../Style.css';

function About() {
  const { role } = useContext(AuthContext);
  return (
    <>
      {role === 'guest' ? <NavbarComponent /> : <></>}
      <div>
        <h1>SYS</h1>
        <h3>See You Soon</h3>
        <div className="flex-container">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643360032/waffle-gefa7ebfb5_1920_eypx6d.jpg"
                  alt="Paris"
                />
              </div>
              <div className="flip-box-back">
                <h2>Paris</h2>
                <p>What an amazing city</p>
              </div>
            </div>
          </div>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643360032/waffle-gefa7ebfb5_1920_eypx6d.jpg"
                  alt="Paris"
                />
              </div>
              <div className="flip-box-back">
                <h2>Paris</h2>
                <p>What an amazing city</p>
              </div>
            </div>
          </div>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643360032/waffle-gefa7ebfb5_1920_eypx6d.jpg"
                  alt="Paris"
                />
              </div>
              <div className="flip-box-back">
                <h2>The Mission</h2>
                <p>
                  We’re hungry storytellers on a mission to hunt down and
                  document the most unique cuisine from around the world,
                  encouraging empathy, understanding and appreciation of
                  different cultures through their food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
