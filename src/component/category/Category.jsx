import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CategoryCard from './categoryCard/CategoryCard';

const Category = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CategoryCard></CategoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard></CategoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard></CategoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard></CategoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard></CategoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard></CategoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard></CategoryCard>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Category;
