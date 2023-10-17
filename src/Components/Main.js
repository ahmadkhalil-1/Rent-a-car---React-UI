import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div
              className="main card"
              style={{ border: "none", height: "22rem" }}
            >
              <div className="card-body">
                <h5 className="card-title mt-3 fs-2">
                  The Best Platform <br /> for Car Rental{" "}
                </h5>
                <p className="card-text mt-4">
                  Ease of doing a car rental safely and <br /> relaibly.
                  Ofcourse at a low price.
                </p>
                <a href="#" className="btn btn-primary mt-2">
                  Rental Car
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-5 d-none d-sm-block">
            <div
              className="main2 card"
              style={{ border: "none", height: "22rem" }}
            >
              <div className="card-body">
                <h5 className="card-title mt-3 fs-2">
                  Easy Way to Rent a <br /> at a low price{" "}
                </h5>
                <p className="card-text mt-4">
                  providing cheap car rental services <br /> and safe and
                  comfortable facilities.
                </p>
                <a href="#" className="btn btn-primary mt-2">
                  Rental Car
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
