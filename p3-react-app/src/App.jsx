import { BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './router';
import { ExercisesProvider } from './utils/ExercisesContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ExercisesProvider>
          <Outlet />
          <Routes />
        </ExercisesProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
