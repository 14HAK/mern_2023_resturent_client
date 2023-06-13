import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const TestimonialCard = ({ review }) => {
  return (
    <div className='mx-20 flex flex-col items-center justify-center text-center'>
      <p>
        <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
      </p>
      <p className='text-xl py-3'>{review?.details}</p>
      <h3 className='text-2xl uppercase'>{review?.name}</h3>
    </div>
  );
};

export default TestimonialCard;
