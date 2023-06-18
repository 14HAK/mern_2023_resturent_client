import { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { useQuery } from '@tanstack/react-query';

const useFetchCart = () => {
  const { user } = useContext(MyContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/client/cart?user=${user?.email}`
      );
      return response.json();
    },
  });

  return [refetch, cart];
};

export default useFetchCart;
