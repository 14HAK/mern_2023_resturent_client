import { createBrowserRouter } from 'react-router-dom';
import Home from '../component/outlate/home/Home';
import App from '../App';
import About from '../component/outlate/about/About';

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
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);

export default router;
