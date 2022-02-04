import { Link } from 'react-router-dom';
import NavbarComponent from '../components/layouts/NavbarComponent';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Contact() {
  const { role } = useContext(AuthContext);
  return (
    <>
      {role === 'guest' ? <NavbarComponent /> : <></>}
      <div className="widget-other-item other-item">
        <div className="container reservation-container">
          <h2>See You Soon</h2>
          <div className="short-detail">
            Lorem ipsum dolor sit
            <div className="ourdetail ico-address">
              <div className="img-ico">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: '5px' }}
                ></i>
                000 ถนนเจริญนคร แขวงบางลำภูล่าง
                <br />
                เขตคลองสาน กรุงเทพฯ 10600
                <div className="ourdetail ico-phone">
                  <div className="img-ico">
                    <i
                      className="fas fa-phone-square-alt"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <Link to="">06-3880-4197, 06-3416-6839</Link>
                  </div>
                </div>
                <div className="ourdetail ico-mail">
                  <div className="img-ico">
                    <i
                      className="fas fa-envelope-open-text"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <Link to="">seeyousoon@gmail.com</Link>
                  </div>
                </div>
                <div className="ourdetail ico-Line">
                  <div className="img-ico">
                    <i
                      className="fab fa-line"
                      style={{ marginRight: '5px' }}
                    ></i>
                    <Link to="">@SeeYouSoon</Link>
                  </div>
                </div>
                <div className="footer-info-social">
                  <Link to="#" style={{ marginRight: '5px' }}>
                    <i className="fab fa-facebook"></i>
                  </Link>

                  <Link
                    to="#"
                    style={{
                      marginRight: '5px',
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>

                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1CIc2l7Qp-21E_Q7EGwRbrWKOp1Q8k6vM&ehbc=2E312F"
                    style={{
                      width: '600px',
                      height: '400px',
                      margin: 'auto',
                      marginTop: '40px',
                    }}
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

{
  /* // <div classNameName="" style={{ textAlign: 'center' }}>
        <h1>See You Soon</h1>
        <h2>ชุมชนของคนที่ชื่นชอบอาหาร</h2>
        <div>
          <p>ติดต่อเรา</p>
          <p>ที่อยู่ : 000 ถนนเจริญนคร แขวงบางลำภูล่าง </p>
          <p>เขตคลองสาน กรุงเทพฯ 10600 </p>
          <p>โทร : 06-3880-4197, 06-3416-6839</p>
          <p> โทรสาร : 0-0000-0000</p>
          <p>อีเมล์ : seeyousoon@allideastudio.com </p>
          <p>line : @SeeYouSoon</p>
          <p> IG : SeeYouSoon</p>
        </div>
      </div> */
}
