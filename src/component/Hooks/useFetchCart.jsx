import { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useFetchCart = () => {
  const { user } = useContext(MyContext);

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      axiosSecure
        .post(`/client/cart?user=${user?.email}`)
        .then((res) => res.data.data);
    },
  });

  return [refetch, cart];
};

export default useFetchCart;
