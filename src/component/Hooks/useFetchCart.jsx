import { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { useQuery } from '@tanstack/react-query';

const useFetchCart = () => {
  const { user } = useContext(MyContext);

  const token = localStorage.getItem('access-token');

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/client/cart?user=${user?.email}`,
        { headers: { authorization: `bearer ${token}` } }
      );
      return response.json();
    },
  });

  return [refetch, cart];
};

export default useFetchCart;
