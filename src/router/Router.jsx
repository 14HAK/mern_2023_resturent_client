import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../component/home/Home';
import ContactUs from '../component/contactUs/ContactUs';
import OurManu from '../component/ourManu/OurManu';
import OurShop from '../component/ourShop/OurShop';
import Signin from '../component/signin/Signin';
import Signup from '../component/signup/Signup';
import Demo from '../component/demo/Demo';
import PrivateRoute from '../Private/PrivateRoute';
import Cart from '../component/cart/Cart';
import Dashboard from '../Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/contact_us',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/our_manu',
        element: <OurManu></OurManu>,
      },
      {
        path: '/our_shop',
        element: <OurShop></OurShop>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/demo',
        element: (
          <PrivateRoute>
            <Demo></Demo>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard',
        element: <Cart></Cart>,
      },
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
