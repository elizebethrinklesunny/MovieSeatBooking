 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MovieListingPage from "../components/MovieListingPage"
import Seatbooking from "../components/SeatBooking"
import store from '../Redux/store';
import MovieDetailsPage from '../components/MovieDetailsPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<MovieListingPage />} />
        <Route path="/seatbooking" element={<Seatbooking />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
