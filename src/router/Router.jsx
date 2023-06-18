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
import Reservation from '../component/reservation/Reservation';
import PaymentHistory from '../component/paymentHistory/PaymentHistory';
import AddReview from '../component/addReview/AddReview';
import MyBooking from '../component/myBooking/MyBooking';
import UserHome from '../component/userHome/UserHome';

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
        path: '/dashboard/userhome',
        element: <UserHome></UserHome>,
      },
      {
        path: '/dashboard/reservation',
        element: <Reservation></Reservation>,
      },
      {
        path: '/dashboard/paymenthistory',
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/dashboard/addreview',
        element: <AddReview></AddReview>,
      },
      {
        path: '/dashboard/mybooking',
        element: <MyBooking></MyBooking>,
      },
    ],
  },
]);

export default router;
