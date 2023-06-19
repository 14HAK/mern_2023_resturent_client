import useFetchCart from '../Hooks/useFetchCart';
import { FaMoneyCheckAlt, FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const [refetch, cart] = useFetchCart();

  const totalPrice = cart?.reduce((memo, item) => {
    return memo + item?.price;
  }, 0);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/client/cart/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };

  return (
    <div>
      <div className='p-3 flex justify-between items-center bg-slate-100 rounded-lg'>
        <span className='text-2xl font-semibold'>
          Total Item: {cart?.length}
        </span>
        <span className='text-2xl font-semibold'>
          Total Price: {totalPrice}
          <small className='font-bold text-blue-500'>$</small>
        </span>
        <button className='text-xl w-32 flex justify-between items-center duration-300 py-1 px-8 rounded-full bg-slate-300 hover:bg-slate-600 hover:text-white'>
          <FaMoneyCheckAlt></FaMoneyCheckAlt>
          Pay
        </button>
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
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <>
                <tr key={index}>
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
                  <td>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className='bg-slate-200 duration-300 p-3 rounded-full hover:bg-red-600 hover:text-white'
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
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
