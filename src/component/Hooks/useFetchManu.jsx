// custom hook:
import { useEffect, useState } from 'react';

const useFetchManu = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://mern-2023-resturent-server.vercel.app/manu_products')
      .then((res) => res.json())
      .then((getData) => setData(getData));
  }, []);
  return [data];
};

export default useFetchManu;
