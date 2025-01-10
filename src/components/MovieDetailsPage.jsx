import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  const navigate = useNavigate();
console.log("selectedMovie",selectedMovie)
  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"></h1>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-5">
          <img
            src={selectedMovie?.img}
            alt={selectedMovie?.title}
            className="img-fluid rounded"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-7">
          <h1 className="mb-3">{selectedMovie?.title}</h1>
          <h5 className="mb-3">Genre: {selectedMovie?.genre}</h5>
          <p>{selectedMovie?.description}</p>
          <p>
            <strong>Release Date:</strong> {selectedMovie?.releaseDate}
          </p>
          <button className="btn btn-primary " onClick={() => navigate('/seatbooking')}>
           Book Now
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default MovieDetailsPage;
