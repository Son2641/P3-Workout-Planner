import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Exercises from './components/Exercises';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';
import Workouts from './components/Workouts';
import HomePage from './components/HomePage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/exercises' element={<Exercises />} />
      <Route path='/workouts' element={<Workouts />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
