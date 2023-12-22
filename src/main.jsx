import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pshop from './components/Pshop/Pshop.jsx';
import Preview from './components/Preview/Preview.jsx';
import Pmanage from './components/Pmanage/Pmanage.jsx';
import Productdeatils from './components/Productdeatils/Productdeatils.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shope',
    element: <Pshop />,
  },
  {
    path: '/review',
    element: <Preview />,
  },
  {
    path: '/product/:productKey',
    element: <Productdeatils />,
  },
  {
    path: '/manage',
    element: <Pmanage />,
  },
  {
    path: '*',
    element: <p>Sorry page not found</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
