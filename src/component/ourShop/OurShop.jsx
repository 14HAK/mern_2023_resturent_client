import Context from '../../context/Context';
import useFetchManu from '../Hooks/useFetchManu';
import SectionTitle from '../sectionTitle/SectionTitle';
import Card from './allItemsCard/Card';

const OurShop = () => {
  const [data] = useFetchManu();

  return (
    <div>
      <SectionTitle title={'our shop'}></SectionTitle>
      <div className='grid grid-cols-4 gap-5 pb-10'>
        {data?.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default OurShop;
