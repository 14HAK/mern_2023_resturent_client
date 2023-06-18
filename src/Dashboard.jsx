import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 items-center'>
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
              <li className='hover:bg-slate-200 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/home'}>HOME</Link>
              </li>
              <li className='hover:bg-slate-200 hover:text-slate-800 font-semibold rounded-md duration-500'>
                <Link to={'/home'}>HOME</Link>
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
