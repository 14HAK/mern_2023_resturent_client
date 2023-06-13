const ManuCard = ({ data }) => {
  return (
    <div>
      <div className='flex justify-center border border-y-slate-100 items-center bg-blue-lightest rounded-lg'>
        <div
          id='app'
          className='bg-white w-full rounded-lg shadow-md grid grid-cols-2 justify-center items-center card text-grey-darkest'
        >
          <img
            className='w-8/12 h-4/12 rounded-lg'
            src={data?.image}
            alt='Room Image'
          />
          <div className='w-full'>
            <div className='p-4 pb-0 flex-1'>
              <h3 className='font-light mb-1 text-grey-darkest'>
                {data?.name}
              </h3>
              <div className='text-xl flex items-center'>{data?.category}</div>
              <span className='text-2xl text-grey-darkest'>${data?.price}</span>
              <div className='flex items-center mt-4'></div>
            </div>
            <div className='bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light '>
              <button className='py-1 font-semibold text-base-200 px-10 bg-slate-400 cursor-pointer hover:bg-slate-700 hover:text-white rounded-md'>
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuCard;
