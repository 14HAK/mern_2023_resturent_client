// import { useContext } from 'react';
// // import useAxiosSecure from './useAxiosSecure';
// import { MyContext } from '../../context/Context';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import useFetchCart from './useFetchCart';

// const useAdminCheck = () => {
//   const { user } = useContext(MyContext);
//   // const [axiosSecure] = useAxiosSecure();
//   const [, cart] = useFetchCart();
//   const token = localStorage.getItem('access-token');

//   const { isAdmin, isLoading: adminLoading } = useQuery({
//     queryKey: ['admin', user],
//     enabled: cart,
//     queryFn: async () => {
//       const response = await axios.post(
//         `http://localhost:3000/apollo?user=${user?.email}`,
//         {
//           method: 'POST',
//           headers: {
//             authorization: `bearer ${token}`,
//           },
//         }
//       );
//       if (!response.ok) {
//         throw Error(response);
//       }
//       console.log(response);
//       return response;
//     },
//   });

//   return [isAdmin, adminLoading];
// };

// export default useAdminCheck;
