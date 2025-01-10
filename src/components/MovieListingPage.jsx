import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import identity from '../Images/Identity.jpeg';
import Rekhachithram from '../Images/Rekhachithram.jpg';
import rifleclub from '../Images/rifleclub.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setSelectedMovie } from '../Redux/movieSlice';

const MovieListingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: 'Identity',
      description: 'A mind-bending thriller by Christopher Nolan.',
      genre: 'Action/Crime/Thriller',
      releaseDate: '2 Jan, 2025',
      img: identity,
    },
    {
      id: 2,
      title: 'Rekhachithram',
      description: 'An epic science fiction sequel by James Cameron.',
      genre: 'Crime/Drama/Suspense/Thriller',
      releaseDate: '9 Jan, 2025',
      img: Rekhachithram,
    },
    {
      id: 3,
      title: 'Rifle Club',
      description: 'A gripping tale of Batman by Christopher Nolan.',
      genre: 'Action/Drama',
      releaseDate: '19 Dec, 2024',
      img: rifleclub,
    },
  ];

  const handleImageClick = (movie) => {
    dispatch(setSelectedMovie(movie));
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movie Booking Listing</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card">
              <img
                src={movie.img}
                alt={movie.title}
                className="card-img-top"
                onClick={() => handleImageClick(movie)}
                style={{ cursor: 'pointer' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListingPage;
