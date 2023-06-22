import { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useFetchCart = () => {
  const { user } = useContext(MyContext);

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/client/cart?user=${user?.email}`
      );
      return response?.data;
    },
  });

  return [refetch, cart];
};

export default useFetchCart;
