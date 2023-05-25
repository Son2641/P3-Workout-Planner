import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Exercises from './components/Exercises';
import NotFoundPage from './components/NotFoundPage';
import Workouts from './components/Workouts';
import HomePage from './components/HomePage';
import LoginRegister from './components/LoginRegister';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/exercises' element={<Exercises />} />
      <Route path='/workouts' element={<Workouts />} />
      <Route path='/login' element={<LoginRegister />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
