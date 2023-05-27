import { BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './router';
import { ExercisesProvider } from './utils/ExercisesContext';
import { PaginationProvider } from './utils/PaginationContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ExercisesProvider>
          <PaginationProvider>
            <Outlet />
            <Routes />
          </PaginationProvider>
        </ExercisesProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
