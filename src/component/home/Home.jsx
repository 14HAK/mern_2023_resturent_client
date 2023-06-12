import Category from '../category/Category';
import SectionTitle from '../sectionTitle/SectionTitle';

const Home = () => {
  return (
    <>
      <SectionTitle title={'category'}></SectionTitle>
      <section className='text-center'>
        <Category></Category>
      </section>
    </>
  );
};

export default Home;
