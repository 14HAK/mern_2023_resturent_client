import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <header>dashboard header</header>
      <Outlet></Outlet>
      <footer>dashboard footer</footer>
    </>
  );
};

export default Dashboard;
