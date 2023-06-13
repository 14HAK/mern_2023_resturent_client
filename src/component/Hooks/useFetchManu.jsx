// custom hook:
import { useEffect, useState } from 'react';

const useFetchManu = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/manu_products')
      .then((res) => res.json())
      .then((getData) => setData(getData));
  }, []);
  return [data];
};

export default useFetchManu;
