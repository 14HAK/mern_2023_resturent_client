import SectionTitle from '../sectionTitle/SectionTitle';
import ManuCard from '../popularManu/manuCard/ManuCard';
import useFetchManu from '../Hooks/useFetchManu';

const ManuRoute = () => {
  const [data] = useFetchManu();

  const popularData = data?.filter((item) => item?.category === 'popular');
  const saladData = data?.filter((item) => item?.category === 'salad');
  const dessertData = data?.filter((item) => item?.category === 'dessert');
  const pizzaData = data?.filter((item) => item?.category === 'pizza');
  const offeredData = data?.filter((item) => item?.category === 'offered');
  return (
    <div>
      <SectionTitle title={'most popular'}></SectionTitle>
      <div className='grid grid-cols-2 gap-5'>
        {popularData?.map((item, index) => (
          <ManuCard key={index} data={item}></ManuCard>
        ))}
      </div>
      <SectionTitle title={'salad'}></SectionTitle>
      <div className='grid grid-cols-2 gap-5'>
        {saladData?.map((item, index) => (
          <ManuCard key={index} data={item}></ManuCard>
        ))}
      </div>
      <SectionTitle title={'dessert'}></SectionTitle>
      <div className='grid grid-cols-2 gap-5'>
        {dessertData?.map((item, index) => (
          <ManuCard key={index} data={item}></ManuCard>
        ))}
      </div>
      <SectionTitle title={'pizza'}></SectionTitle>
      <div className='grid grid-cols-2 gap-5'>
        {pizzaData?.map((item, index) => (
          <ManuCard key={index} data={item}></ManuCard>
        ))}
      </div>
      <SectionTitle title={'offered'}></SectionTitle>
      <div className='grid grid-cols-2 gap-5'>
        {offeredData?.map((item, index) => (
          <ManuCard key={index} data={item}></ManuCard>
        ))}
      </div>
    </div>
  );
};

export default ManuRoute;
