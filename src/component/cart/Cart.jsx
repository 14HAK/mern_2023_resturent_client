import { useContext } from 'react';
import { MyContext } from '../../context/Context';

const Cart = () => {
  const { cart } = useContext(MyContext);
  console.log(cart);

  return (
    <div>
      <p className='text-2xl font-bold'>this is cart page</p>
    </div>
  );
};

export default Cart;
