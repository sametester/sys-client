import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NavbarComponent from '../components/layouts/NavbarComponent';

function About() {
  const { role } = useContext(AuthContext);
  return (
    <>
      {role === 'guest' ? <NavbarComponent /> : <></>}
      <div
        style={{
          backgroundColor: '#ecf0f1',
          margin: '20px',
          fontFamily: 'Arial Tahoma',
          fontSize: '20px',
          color: ' #666666',
          textAlign: 'center',
        }}
      >
        <div class="wrapper">
          <div
            class="col_third"
            style={{
              width: '32%',
              position: 'relative',
              display: 'inline',
              display: 'inline-block',
              float: 'left',
              marginRight: '2%',
              marginBottom: '20px',
            }}
          >
            <div class="hover panel">
              <div class="front">
                <div class="box1">
                  <p>Front Side</p>
                </div>
              </div>
              <div class="back">
                <div class="box2">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col_third"
            style={{
              width: '32%',
              position: 'relative',
              display: 'inline',
              display: 'inline-block',
              float: 'left',
              marginRight: '2%',
              marginBottom: '20px',
            }}
          >
            <div class="hover panel">
              <div class="front">
                <div class="box1">
                  <p>Front Side</p>
                </div>
              </div>
              <div class="back">
                <div class="box2">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col_third end" style={{ marginRight: '0 !important' }}>
            <div class="hover panel">
              <div class="front">
                <div class="box1">
                  <p>Front Side</p>
                </div>
              </div>
              <div class="back">
                <div class="box2">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
