import Category from '../category/Category';
import SectionTitle from '../sectionTitle/SectionTitle';

const Home = () => {
  return (
    <>
      <SectionTitle title={'category'}></SectionTitle>
      <section className='text-center'>
        <Category></Category>
      </section>
      <SectionTitle title={'popular manu'}></SectionTitle>
    </>
  );
};

export default Home;
