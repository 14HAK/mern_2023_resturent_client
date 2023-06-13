// custom hook:
import { useEffect, useState } from 'react';

const useFetchManu = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((getData) => setData(getData));
  }, []);
  return [data];
};

export default useFetchManu;
