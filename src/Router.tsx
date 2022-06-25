import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Error';
import { Event } from './pages/Event';
import { Subscribe } from './pages/Subscribe';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/evento" element={<Event />} />
      <Route path="/evento/aula/:slug" element={<Event />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
