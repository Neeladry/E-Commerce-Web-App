import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="./assets/bgimg.png"
          className="card-img"
          alt="Backgroung"
          height="550px"
        />

        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-4 fw-bolder mb-0 text-dark">
              NEW YEAR ARRIVALS
            </h5>
            <p className="card-text lead fs-2 text-dark">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
