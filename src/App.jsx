import { Outlet } from 'react-router-dom';
import Navbar from './component/header/Navbar';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
