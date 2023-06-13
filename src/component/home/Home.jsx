import Category from '../category/Category';
import PopularManu from '../popularManu/PopularManu';
import SectionTitle from '../sectionTitle/SectionTitle';
import Testimonial from '../testimonialsReview/Testimonial';
import './Home.css';

const Home = () => {
  return (
    <>
      <SectionTitle title={'category'}></SectionTitle>
      <section className='text-center'>
        <Category></Category>
      </section>
      <SectionTitle title={'popular manu'}></SectionTitle>
      <PopularManu></PopularManu>
      <SectionTitle title={'testimonial reviews'}></SectionTitle>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
