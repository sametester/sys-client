import NavbarComponent from '../components/layouts/NavbarComponent';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const { user, role } = useContext(AuthContext);

  return (
    <>
      {role === 'guest' ? <NavbarComponent /> : <></>}
      <div
        className="p-3 bg-light bg-gradient text-dark"
        // style={{ height: '90vh' }}
      >
        <h1 className="text-center">See You Soon</h1>

        <Carousel className="w-50 m-auto" variant="dark">
          {/* style=
          {{
            width: '700px',

            margin: 'auto',
          }} */}
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1645026805/See_You_Soon_zwmhtk.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643360126/breads-g3edb16e0b_1920_s6a8lf.jpg"
              alt="Second slide"
            />
            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643439120/fish-gaff618152_1920_lfoix5.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643360032/food-g7fa340343_1920_q2e8lm.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643439157/food-g94ec3f3e0_1920_s1kglu.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        {/* <div className="container my-5">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
