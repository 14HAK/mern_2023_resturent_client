import { useContext } from 'react';
import { MyContext } from '../../context/Context';

const Cart = () => {
  const { cart } = useContext(MyContext);

  return (
    <div>
      <div className='p-2 text-2xl font-semibold bg-red-300 rounded-lg'>
        total price
      </div>
      <div className='divider'>OR</div>
      <div className='overflow-x-auto bg-slate-100'>
        <table className='table'>
          {/* head */}
          <thead className='border-b-2 border-slate-600 pb-1'>
            <tr>
              <th></th>
              <th>PICTUR</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>USER</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className='avatar'>
                      <div className='w-16 rounded'>
                        <img
                          src={item?.image}
                          alt='Tailwind-CSS-Avatar-component'
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>
                    {item?.price}{' '}
                    <span className='font-bold text-blue-500'>$</span>
                  </td>
                  <td>{item?.user}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
