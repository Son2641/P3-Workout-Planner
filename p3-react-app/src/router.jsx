import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Exercises from './components/Exercises';
import NotFoundPage from './components/NotFoundPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/exercises' element={<Exercises />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
