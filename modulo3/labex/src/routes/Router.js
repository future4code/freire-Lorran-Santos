import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ListTripsPage from '../pages/ListTrips/ListTripsPage';
import ApplicationFromPage from '../pages/ApplicationForm/ApplicationFormPage';
import LoginPage from '../pages/Login/LoginPage';
import AdminHomePage from '../pages/AdminHome/AdminHomePage';
import CreateTripPages from '../pages/CreateTrip/CreateTripPage';
import TripDetailsPage from '../pages/TripDetails/TripDetailsPage';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="listTripsPage" element={<ListTripsPage />} />
          <Route path="applicationFormPage" element={<ApplicationFromPage />} />
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="adminHomePage" element={<AdminHomePage />} />
          <Route path="createTripPage" element={<CreateTripPages />} />
          <Route path="tripDetailsPage" element={<TripDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
