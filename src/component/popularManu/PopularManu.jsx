import ManuCard from './manuCard/ManuCard';

const PopularManu = () => {
  return (
    <div className='grid grid-cols-2 gap-5 py-5'>
      <ManuCard></ManuCard>
      <ManuCard></ManuCard>
      <ManuCard></ManuCard>
      <ManuCard></ManuCard>
    </div>
  );
};

export default PopularManu;
