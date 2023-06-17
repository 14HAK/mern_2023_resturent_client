import useFetchManu from '../Hooks/useFetchManu';
import ManuCard from './manuCard/ManuCard';

const PopularManu = () => {
  const [data] = useFetchManu();
  const popularData = data?.filter((item) => item?.category === 'popular');
  return (
    <div>
      <div className='grid grid-cols-2 gap-5'>
        {popularData?.map((item, index) => (
          <ManuCard key={index} data={item}></ManuCard>
        ))}
      </div>
    </div>
  );
};

export default PopularManu;
