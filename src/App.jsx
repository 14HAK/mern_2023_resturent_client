import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>navbar</header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
};

export default App;
