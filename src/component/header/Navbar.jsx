import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='p-2 bg-slate-700 text-white '>
      <ul className='flex justify-center items-center gap-5 '>
        <li className='hover:bg-yellow-800 text-2xl'>
          <Link to={'/'}>LOGO</Link>
        </li>
        <li className='hover:bg-yellow-800'>
          <Link to={'/home'}>HOME</Link>
        </li>
        <li className='hover:bg-yellow-800'>
          <Link to={'/contact_us'}>CONTACT-US</Link>
        </li>
        <li className='hover:bg-yellow-800'>
          <Link to={'/dashboard'}>DASHBOARD</Link>
        </li>
        <li className='hover:bg-yellow-800'>
          <Link to={'/our_manu'}>OUR-MANU</Link>
        </li>
        <li className='hover:bg-yellow-800'>
          <Link to={'/our_shop'}>OUR-SHOP</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
