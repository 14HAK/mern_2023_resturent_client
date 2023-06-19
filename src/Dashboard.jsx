import { Link, Outlet } from 'react-router-dom';
import {
  FaCartPlus,
  FaHome,
  FaNewspaper,
  FaPaperPlane,
  FaRegCalendarCheck,
  FaRegStar,
  FaShoppingBag,
  FaWallet,
} from 'react-icons/fa';
import useFetchCart from './component/Hooks/useFetchCart';

const Dashboard = () => {
  const [, cart] = useFetchCart();

  return (
    <div className='grid grid-cols-12'>
      <header className='col-span-3'>
        <div className='drawer lg:drawer-open'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col items-center justify-center'>
            <label
              htmlFor='my-drawer-2'
              className='btn btn-neutral drawer-button lg:hidden'
            >
              Open
            </label>
          </div>
          <div className='drawer-side'>
            <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
            <ul className='menu p-4 w-80 h-full bg-slate-600 text-white'>
              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/dashboard/userhome'}>
                  <span className='text-2xl'>
                    <FaHome></FaHome>
                  </span>{' '}
                  USER HOME
                </Link>
              </li>
              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/dashboard/reservation'}>
                  <span className='text-2xl'>
                    <FaNewspaper></FaNewspaper>
                  </span>{' '}
                  RESERVATION
                </Link>
              </li>
              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/dashboard/paymenthistory'}>
                  <span className='text-2xl'>
                    <FaWallet></FaWallet>
                  </span>{' '}
                  PAYMENT HISTORY
                </Link>
              </li>
              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/dashboard/cart'}>
                  <span className='relative text-2xl'>
                    <FaCartPlus></FaCartPlus>
                    <div className='badge absolute -top-2 bg-green-200 text-slate-700 font-mono -left-5'>
                      +{cart?.length}
                    </div>
                  </span>{' '}
                  MY CART
                </Link>
              </li>
              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/dashboard/addreview'}>
                  <span className='text-2xl'>
                    <FaRegStar></FaRegStar>
                  </span>{' '}
                  ADD REVIEW
                </Link>
              </li>
              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/dashboard/mybooking'}>
                  <span className='text-2xl'>
                    <FaRegCalendarCheck></FaRegCalendarCheck>
                  </span>{' '}
                  MY BOOKING
                </Link>
              </li>

              <span className='h-[1px] w-full my-3 bg-white'></span>

              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/home'}>
                  <span className='text-2xl'>
                    <FaHome></FaHome>
                  </span>{' '}
                  HOME
                </Link>
              </li>

              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/our_shop'}>
                  <span className='text-2xl'>
                    <FaShoppingBag></FaShoppingBag>
                  </span>{' '}
                  OUR SHOP
                </Link>
              </li>

              <li className='hover:bg-slate-200 mb-2 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/contact_us'}>
                  <span className='text-2xl'>
                    <FaPaperPlane></FaPaperPlane>
                  </span>{' '}
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className='col-span-9 p-10 rounded-md'>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
