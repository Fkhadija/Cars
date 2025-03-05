import React from 'react';
import { Link } from 'react-router-dom';
import cars from '../data';
import './Cars.css';

const Cars = () => {
  return (
    <div className="cars-container">
      <h1>All Cars</h1>
      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
            <h2>{car.make} {car.model}</h2>
            <p>{car.year} | {car.price}</p>
            <Link to={`/car/${car.id}`} className="view-details-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;