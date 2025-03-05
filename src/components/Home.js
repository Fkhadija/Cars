import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faCarSide,
  faTruckPickup,
  faCaravan,
  faTruckMonster,
  faCarAlt,
} from '@fortawesome/free-solid-svg-icons';
import cars from '../data';
import './Home.css';

const Home = () => {
  const bestDeals = cars.slice(0, 4); // Show first 4 cars as best deals
  const categories = [
    { name: 'Coupé / Cabriolet', icon: faCar },
    { name: 'Citadine', icon: faCarSide },
    { name: 'Pick-up', icon: faTruckPickup },
    { name: 'Compacte', icon: faCaravan },
    { name: 'SUV / 4x4', icon: faTruckMonster },
    { name: 'Berline', icon: faCarAlt },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Find Your Dream Car</h1>
          <p>Explore our wide range of luxury and performance vehicles.</p>
          <div className="hero-buttons">
            <Link to="/cars" className="cta-button">
              Acheter une voiture
            </Link>
          </div>
        </div>
      </section>

      {/* Best Deals Section */}
      <section className="section">
        <h1>Les meilleures affaires de la semaine</h1>
        <div className="cars-grid">
          {bestDeals.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
              <h2>{car.make} {car.model}</h2>
              <p>{car.year} | {car.price}</p>
              <Link to={`/car/${car.id}`} className="view-details-button">
                Voir les détails
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <h1>Nos voitures par catégorie</h1>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <FontAwesomeIcon icon={category.icon} className="category-icon" />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <h1>Pourquoi nous choisir</h1>
        <div className="why-choose-us">
          <p>Nous offrons les meilleurs prix, un service client exceptionnel et une large sélection de véhicules.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <h1>Ce que nos clients disent</h1>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"J'ai trouvé la voiture parfaite à un prix incroyable. Merci Car Sale!"</p>
            <h3>- Jean Dupont</h3>
          </div>
          <div className="testimonial-card">
            <p>"Service client exceptionnel. Je recommande vivement!"</p>
            <h3>- Marie Curie</h3>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section">
        <h1>Rejoignez notre communauté</h1>
        <div className="social-proof">
          <p>Plus de <strong>10,000 utilisateurs</strong> ont acheté des voitures cette semaine!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;