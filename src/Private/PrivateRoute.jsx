import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { MyContext } from '../context/Context';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const location = useLocation();
  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    return (
      <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivateRoute;
