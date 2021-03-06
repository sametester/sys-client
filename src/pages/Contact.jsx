import { Link } from 'react-router-dom';
import NavbarComponent from '../components/layouts/NavbarComponent';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Contact() {
  const { role } = useContext(AuthContext);
  return (
    <>
      {role === 'guest' ? <NavbarComponent /> : <></>}
      <div className="widget-other-item other-item ">
        <div className="container reservation-container ">
          <h2 className="fw-bold">See You Soon</h2>
          <div className="short-detail ">
            {/* Lorem ipsum dolor sit */}
            <div className="ourdetail ico-address">
              <div className="img-ico">
                <i className="fas fa-map-marker-alt me-2"></i>
                000 ถนนเจริญนคร แขวงบางลำภูล่าง
                <br />
                เขตคลองสาน กรุงเทพฯ 10600
                <div className="ourdetail ico-phone">
                  <div className="img-ico ">
                    <i className="fas fa-phone-square-alt me-2"></i>
                    <Link to="#">06-3880-4197, 06-3416-6839</Link>
                  </div>
                </div>
                <div className="ourdetail ico-mail ">
                  <div className="img-ico">
                    <i className="fas fa-envelope-open-text me-2"></i>
                    <Link to="#">seeyousoon@gmail.com</Link>
                  </div>
                </div>
                <div className="ourdetail ico-Line">
                  <div className="img-ico">
                    <i className="fab fa-line me-2"></i>
                    <Link to="#">@SeeYouSoon</Link>
                  </div>
                </div>
                <div className="footer-info-social">
                  <Link className="me-2" to="#">
                    <i className="fab fa-facebook"></i>
                  </Link>

                  <Link className="me-2" to="#">
                    <i className="fab fa-twitter "></i>
                  </Link>

                  <Link to="#">
                    <i className="fab fa-instagram "></i>
                  </Link>
                </div>
                <div className="d-flex">
                  <iframe
                    className="m-auto mb-2 mt-3 image-fluid"
                    title="myFrame"
                    src="https://www.google.com/maps/d/u/0/embed?mid=1cDVXkM8pG2-OakKfyJaZbe5_rvrL5uCK&ehbc=2E312F"
                    width="600"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
