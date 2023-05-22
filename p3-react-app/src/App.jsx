import { BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './router';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Outlet />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
