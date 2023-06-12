import { Outlet } from 'react-router-dom';
import Navbar from './component/header/Navbar';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
