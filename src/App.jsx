import { Outlet } from 'react-router-dom';
import Navbar from './component/header/Navbar';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='h-[33.6rem] bg-slate-300 overflow-y-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
