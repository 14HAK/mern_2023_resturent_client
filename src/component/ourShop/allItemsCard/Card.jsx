import { useContext } from 'react';
import { MyContext } from '../../../context/Context';

const Card = ({ item }) => {
  const { user } = useContext(MyContext);

  const handleCartItem = (data) => {
    if (user) {
      data['user'] = user.email;
      fetch(`http://localhost:3000/client/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <>
      <>
        <section className='flex flex-col justify-center antialiased text-gray-600'>
          <div className='h-full'>
            <div className='max-w-xs mx-auto'>
              <div className='flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden'>
                <div
                  className='block focus:outline-none focus-visible:ring-2'
                  href='#0'
                >
                  <figure className='relative h-0 pb-[56.25%] overflow-hidden'>
                    <img
                      className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                      src={item?.image}
                      width='320'
                      height='180'
                      alt='Course'
                    />
                  </figure>
                </div>

                <div className='flex-grow flex flex-col p-5 text-start'>
                  <div className='flex-grow'>
                    <header className='mb-3'>
                      <a
                        className='block focus:outline-none focus-visible:ring-2'
                        href='#0'
                      >
                        <h3 className='text-[22px] text-gray-900 font-extrabold leading-snug'>
                          {item?.name}
                        </h3>
                      </a>
                    </header>

                    <div className='mb-8'>
                      <p>{item?.recipe}</p>
                    </div>
                  </div>

                  <div className='flex justify-end space-x-2'>
                    <button
                      className='font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500'
                      href='#0'
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => handleCartItem(item)}
                      className='font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white'
                      href='#0'
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Card;
