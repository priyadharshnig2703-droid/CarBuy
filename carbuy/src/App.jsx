
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import MyLoans from "./components/MyLoans";
import BrowseCars from "./components/Browsecars";
import MyPurchases from "./components/MyPurchase";
import Favorites from "./components/Favorites";

import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  // Add a car to Favorites or remove it if already saved
  const toggleFavorite = (car) => {
    const alreadyFavorite = favorites.some(
      (item) => item.name === car.name
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter((item) => item.name !== car.name)
      );
    } else {
      setFavorites([...favorites, car]);
    }
  };

  // Check whether a car is already in Favorites
  const isFavorite = (carName) =>
    favorites.some((item) => item.name === carName);

  const cars = [
    {
      name: "Hyundai Creta",
      image: "/Hyundai Creta.png",
      price: "₹18,50,000",
    },
    {
      name: "Toyota Fortuner",
      image: "/Toyota Fortuner.png",
      price: "₹42,00,000",
    },
    {
      name: "Maruti Swift",
      image: "/Maruti Swift.png",
      price: "₹8,20,000",
    },
    {
      name: "Honda City",
      image: "/Honda City.png",
      price: "₹14,50,000",
    },
  ];

  return (
    <div className="app">
      <div className="top-bar">
        <p>Location: Chennai, Tamil Nadu</p>
        <p>Phone: +91 98765 43210</p>
      </div>

      <NavBar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <section className="hero">
                <img
                  className="hero-car"
                  src="/car.jpeg"
                  alt="Luxury car"
                />

                <div className="hero-content">
                  <h1>Drive Your Dream</h1>
                  <p>Find Your Perfect Car</p>
                  <button>Browse Cars</button>
                  <button>Learn More</button>
                </div>
              </section>

              {/* DASHBOARD */}
              <section className="dashboard-cards">
                <div className="summary-card">
                  <h3>Available Cars</h3>
                  <p>120</p>
                </div>

                <div className="summary-card">
                  <h3>My Purchases</h3>
                  <p>2</p>
                </div>

                <div className="summary-card">
                  <h3>Active Loans</h3>
                  <p>1</p>
                </div>

                <div className="summary-card">
                  <h3>Favorites</h3>
                  <p>{favorites.length}</p>
                </div>
              </section>

              {/* FEATURED CARS */}
              <section className="featured-cars">
                <h2>Featured Cars</h2>

                {cars.map((car) => (
                  <div className="car-card" key={car.name}>
                    <div className="car-image-container">
                      <img
                        src={car.image}
                        alt={car.name}
                      />

                      <button
                        type="button"
                        className="favorite-btn"
                        onClick={() => toggleFavorite(car)}
                        aria-label={
                          isFavorite(car.name)
                            ? `Remove ${car.name} from favorites`
                            : `Add ${car.name} to favorites`
                        }
                      >
                        {isFavorite(car.name) ? "❤️" : "♡"}
                      </button>
                    </div>

                    <h3>{car.name}</h3>
                    <p>{car.price}</p>
                  </div>
                ))}
              </section>

              {/* HOW IT WORKS */}
              <section className="how-it-works">
                <h2>How It Works</h2>

                <div className="steps-container">
                  <div className="step-card">
                    <h3>1. Browse Cars</h3>
                    <p>
                      Explore available cars and compare your options.
                    </p>
                  </div>

                  <div className="step-card">
                    <h3>2. Select a Car</h3>
                    <p>Choose the car that suits your needs.</p>
                  </div>

                  <div className="step-card">
                    <h3>3. Choose Payment</h3>
                    <p>Select a payment method that works for you.</p>
                  </div>

                  <div className="step-card">
                    <h3>4. Complete Purchase</h3>
                    <p>Complete the steps to purchase your car.</p>
                  </div>

                  <div className="step-card">
                    <h3>5. Drive Your Car</h3>
                    <p>Get ready to enjoy your new car!</p>
                  </div>
                </div>
              </section>
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route
          path="/browse-cars"
          element={<BrowseCars />}
        />

        <Route
          path="/my-purchases"
          element={<MyPurchases />}
        />

        <Route
          path="/my-loans"
          element={<MyLoans />}
        />

        {/* FAVORITES PAGE */}
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
      </Routes>
    </div>
  );
}

export default App;
