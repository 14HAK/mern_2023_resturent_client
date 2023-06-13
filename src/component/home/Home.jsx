import Category from '../category/Category';
import PopularManu from '../popularManu/PopularManu';
import SectionTitle from '../sectionTitle/SectionTitle';
import Testimonial from '../testimonialsReview/Testimonial';
import { Helmet } from 'react-helmet';
import './Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>website/Home</title>
      </Helmet>
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
