import { useQuery } from '@tanstack/react-query';

const UserList = () => {
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3000/users').then((res) => res.json()),
  });

  console.log(data);

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='text-md text-slate-700'>
              <th>#</th>
              <th>EMAIL</th>
              <th>_ID</th>
              <th>OTHERS</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.email}</td>
                  <td>{item?._id}</td>
                  <td>$$</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
