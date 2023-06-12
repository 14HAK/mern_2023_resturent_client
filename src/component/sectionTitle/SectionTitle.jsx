const SectionTitle = ({ title }) => {
  return (
    <div className='text-center flex justify-center items-center'>
      <h1 className='w-4/12 text-2xl uppercase text-center font-bold border-y-2 border-green-900 my-10 py-3'>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
