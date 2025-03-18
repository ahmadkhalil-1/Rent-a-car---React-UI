import React from "react";
import { useMediaQuery } from "react-responsive";

const RecommendedCars = (props) => {
  const isEven = props.id % 2 === 0;
  const isFirst = props.id === 1 || props.id === 5;

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      {/* For Mobile Screen Code */}

      {isMobile ? (
        <div className="card mt-3 my-5" style={{ border: "none" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bolder" }}>
              {props.name}
            </h5>{" "}
            <i
              className={isEven ? "fa-solid fa-heart" : "far fa-heart"}
              style={{
                fontSize: "1.3rem",
                color: isEven ? "red" : "gray",
                position: "absolute",
                top: "1.5rem",
                left: "14rem",
              }}
            ></i>
            <p style={{ color: "gray" }}>{props.model}</p>
            <div className="d-flex justify-content-between">
              <img
                style={{ width: "10rem" }}
                src={props.img}
                alt="Car"
                className="card-img-top"
              />
              <div className="mt-2, m-auto " style={{ color: "gray" }}>
                <p className="d-flex">
                  <i className="fa-solid fa-gas-pump mx-1"></i>
                  {props.fuel}L
                </p>
                <p className="d-flex">
                  <i className="fa-solid fa-gear mx-1"></i>Manual
                </p>
                <p className="d-flex">
                  <i className="fa-solid fa-user-group mx-1"></i>2 People
                </p>
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "1.6rem" }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {props.price}/
                <span style={{ color: "gray", fontSize: "1rem" }}>day</span>
              </span>
              <button className="btn btn-primary mx-3">Rent Now</button>
            </div>
            {isFirst && (
              <del
                style={{
                  color: "gray",
                  fontSize: "1rem",
                  position: "absolute",
                  left: "1rem",
                  bottom: "12px",
                }}
              >
                $80.00
              </del>
            )}
          </div>
        </div>
      ) : (
        // For Large Screen Code

        <div className="card mt-3 my-5" style={{ border: "none" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bolder" }}>
              {props.name}
            </h5>{" "}
            <i
              className={isEven ? "fa-solid fa-heart" : "far fa-heart"}
              style={{
                fontSize: "1.3rem",
                color: isEven ? "red" : "gray",
                position: "absolute",
                top: "1.5rem",
                left: "14rem",
              }}
            ></i>
            <p style={{ color: "gray" }}>{props.model}</p>
            <img src={props.img} className="card-img-top" alt="Car"/>
            
            <div
              className="d-flex justify-content-between mt-2"
              style={{ color: "gray" }}
            >
              <p>
                <i className="fa-solid fa-gas-pump mx-1"></i>
                {props.fuel}L
              </p>
              <p>
                <i className="fa-solid fa-gear mx-1"></i>Manual
              </p>
              <p>
                <i className="fa-solid fa-user-group mx-1"></i>2 People
              </p>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "1.6rem" }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {props.price}/
                <span style={{ color: "gray", fontSize: "1rem" }}>day</span>
              </span>
              <button className="btn btn-primary mx-3">Rent Now</button>
            </div>
            {isFirst && (
              <del
                style={{
                  color: "gray",
                  fontSize: "1rem",
                  position: "absolute",
                  left: "1rem",
                  bottom: "12px",
                }}
              >
                $80.00
              </del>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RecommendedCars;
