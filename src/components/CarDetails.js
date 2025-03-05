import React from 'react';
import { useParams } from 'react-router-dom';
import cars from '../data';
import './CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Car not found.</div>;
  }

  const handleBuyNow = () => {
    alert(`You have purchased the ${car.make} ${car.model}!`);
  };

  return (
    <div className="car-details-container">
      <h1>{car.make} {car.model}</h1>
      <img src={car.image} alt={`${car.make} ${car.model}`} className="car-details-image" />
      <div className="car-info">
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Price:</strong> {car.price}</p>
        <p><strong>Engine:</strong> {car.engine}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Drivetrain:</strong> {car.drivetrain}</p>
        <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
        <p><strong>Description:</strong> {car.description}</p>
        <button onClick={handleBuyNow} className="buy-now-button">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CarDetails;