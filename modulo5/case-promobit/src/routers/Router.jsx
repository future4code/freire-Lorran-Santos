import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage.jsx/HomePage';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path='/details/:id'
          element={<DetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
