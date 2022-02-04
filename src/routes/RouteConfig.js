import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Review from '../pages/Review';
import MainLayout from '../components/layouts/MainLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import About from '../pages/About';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import PostContextProvider from '../contexts/PostContext';

const routes = {
  guest: [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/review', element: <Login /> },
    { path: '/contact', element: <Contact /> },
    // { path: '/about', element: <About /> },
    { path: '*', element: <Navigate to="/" replace={true} /> },
  ],
  user: [
    { path: '/', element: <Home /> },
    { path: '/review', element: <Review /> },
    { path: '/contact', element: <Contact /> },
    { path: '/about', element: <About /> },
    { path: '*', element: <Navigate to="/" replace={true} /> },
  ],
};
function RouteConfig() {
  const { user, role } = useContext(AuthContext);

  if (role === 'user' && !user) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      {role === 'user' ? (
        <>
          <PostContextProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                {routes[role].map(item => (
                  <Route
                    path={item.path}
                    element={item.element}
                    key={item.path}
                  />
                ))}
              </Route>
            </Routes>
          </PostContextProvider>
        </>
      ) : (
        <Routes>
          {routes[role].map(item => (
            <Route path={item.path} element={item.element} key={item.path} />
          ))}
        </Routes>
      )}
    </>
  );
}

export default RouteConfig;
