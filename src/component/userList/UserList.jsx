import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserCheck, FaUserCog } from 'react-icons/fa';

const UserList = () => {
  const { data, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://mern-2023-resturent-server.vercel.app/users').then((res) =>
        res.json()
      ),
  });

  const handleDeleteUser = () => {
    console.log('delete user call!');
  };

  const handlePatchUpdateUser = (user) => {
    const userRole = { id: user?._id, role: user?.role };

    fetch(
      `https://mern-2023-resturent-server.vercel.app/user_role/${JSON.stringify(
        userRole
      )}`,
      {
        method: 'PATCH',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          refetch();
        }
      });
  };

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='text-md text-slate-700'>
              <th>#</th>
              <th>EMAIL</th>
              <th>ID</th>
              <th>ROLE</th>
              <th>DELETE USER</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user?.email}</td>
                <td>{user?._id}</td>
                {user?.role === 'admin' ? (
                  <>
                    <td>
                      <button
                        onClick={() => handlePatchUpdateUser(user)}
                        className='bg-slate-200 hover:bg-green-700 duration-300 p-3 rounded-full  hover:text-white'
                      >
                        <FaUserCog></FaUserCog>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <button
                        onClick={() => handlePatchUpdateUser(user)}
                        className='bg-slate-200 hover:bg-green-700 duration-300 p-3 rounded-full  hover:text-white'
                      >
                        <FaUserCheck></FaUserCheck>
                      </button>
                    </td>
                  </>
                )}
                <td>
                  <button
                    onClick={() => handleDeleteUser()}
                    className='bg-slate-200 duration-300 p-3 rounded-full hover:bg-red-600 hover:text-white'
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
