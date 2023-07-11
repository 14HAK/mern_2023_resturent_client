import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import TestimonialCard from './reviewCard/TestimonialCard';
import { useEffect, useState } from 'react';

const Testimonial = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch('https://mern-2023-resturent-server.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className='pt-10 pb-20'>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {reviews?.map((review, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard key={index} review={review}></TestimonialCard>{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
