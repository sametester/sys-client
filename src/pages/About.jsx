import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NavbarComponent from '../components/layouts/NavbarComponent';

function About() {
  const { role } = useContext(AuthContext);
  return (
    <>
      {role === 'guest' ? <NavbarComponent /> : <></>}
      <h1>test</h1>
    </>
  );
}

export default About;
