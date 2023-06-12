import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../component/home/Home';
import ContactUs from '../component/contactUs/ContactUs';
import DashBoard from '../component/dashboard/DashBoard';
import OurManu from '../component/ourManu/OurManu';
import OurShop from '../component/ourShop/OurShop';

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
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
      },
      {
        path: '/our_manu',
        element: <OurManu></OurManu>,
      },
      {
        path: '/our_shop',
        element: <OurShop></OurShop>,
      },
    ],
  },
]);

export default router;
