import React, { useState } from "react";
import RecomendedCars from "./RecomendedCars";

const CarsList = (props) => {
  const [displayCar, setDisplayCar] = useState(4);

  const handleShowMore = () => {
    setDisplayCar(displayCar + 4);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {props.car.slice(0, displayCar).map((cars) => (
            <div className="col-md-3" key={cars.id}>
              <RecomendedCars
                id={cars.id}
                name={cars.title}
                model={cars.model}
                fuel={cars.fuel}
                price={cars.price}
                img={cars.img}
              />
            </div>
          ))}
        </div>
        {displayCar < props.car.length && (
          <div
            className="d-flex justify-content-between text-center"
            style={{ marginBottom: "3rem" }}
          >
            <div></div>

            <button
              style={{ marginLeft: "4rem" }}
              className="btn btn-primary"
              onClick={handleShowMore}
            >
              Show More Car
            </button>

            <span id="cars" style={{ color: "gray", marginTop: "5px" }}>
              120 Cars
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default CarsList;
