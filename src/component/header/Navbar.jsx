import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/Context';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import useFetchCart from '../Hooks/useFetchCart';

const Navbar = () => {
  const { user, logOut, setUser } = useContext(MyContext);
  const [refetch, cart] = useFetchCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser();
      })
      .catch();
  };

  return (
    <div className='p-2 bg-slate-700 text-white '>
      <ul className='flex justify-center items-center gap-5 '>
        <li className=' text-2xl'>
          <Link to={'/'}>LOGO</Link>
        </li>
        <li className='hover:underline'>
          <Link to={'/home'}>HOME</Link>
        </li>
        <li className='hover:underline'>
          <Link to={'/contact_us'}>CONTACT-US</Link>
        </li>
        {user ? (
          <>
            <li className='hover:underline'>
              <Link to={'/dashboard'}>DASHBOARD</Link>
            </li>
          </>
        ) : (
          <></>
        )}
        <li className='hover:underline'>
          <Link to={'/our_manu'}>OUR-MANU</Link>
        </li>
        <li className='hover:underline'>
          <Link to={'/demo'}>DEMO</Link>
        </li>
        <li className='hover:underline'>
          <Link to={'/our_shop'}>OUR-SHOP</Link>
        </li>
        <li className='relative mx-5'>
          <Link to={'/dashboard/cart'}>
            <span className='text-5xl'>
              <HiOutlineShoppingCart></HiOutlineShoppingCart>
              <div className='badge absolute top-0 font-mono left-5'>
                +{cart?.length}
              </div>
            </span>
          </Link>
        </li>
        {user ? (
          <></>
        ) : (
          <>
            <li className='hover:underline'>
              <Link to={'/signin'}>SIGN-IN</Link>
            </li>
            <li className='hover:underline'>
              <Link to={'/signup'}>SIGN-UP</Link>
            </li>
          </>
        )}
        {user ? (
          <>
            <span className='flex gap-2 justify-between items-center'>
              <button
                onClick={() => handleLogOut()}
                className='text-slate-600 rounded-md px-3 hover:text-white hover:bg-gray-500 py-1 bg-white font-semibold'
              >
                SIGN OUT
              </button>
              <span className='avatar placeholder'>
                <span className='text-neutral-content rounded-full w-12'>
                  <img
                    className='rounded-full'
                    src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
                    alt=''
                  />
                </span>
                <small>{user?.email}</small>
              </span>
            </span>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
