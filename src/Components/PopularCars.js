import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const PopularCars = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <div className="container">

      {/* For Mobile Screen code */}
      {isMobile ? (
        <Slider {...settings}>
          <div className="col-md-3">
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                  Koenigsegg
                </h5>{" "}
                <i
                  className="fa-solid fa-heart"
                  style={{
                    fontSize: "1.3rem",
                    color: "red",
                    position: "absolute",
                    top: "1.5rem",
                    left: "14rem",
                  }}
                ></i>
                <p style={{ color: "gray" }}>Sport</p>
                <img
                  src="https://thumbs.dreamstime.com/b/beautiful-yellow-modern-super-race-car-side-view-isolated-white-background-beautiful-yellow-modern-super-race-car-side-view-100746331.jpg"
                  className="card-img-top"
                  alt="Car 1"
                />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ color: "gray" }}
                >
                  <p>
                    <i className="fa-solid fa-gas-pump mx-1"></i>90L
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
                    $99.00/
                    <span style={{ color: "gray", fontSize: "1rem" }}>day</span>
                  </span>
                  <button className="btn btn-primary mx-3">Rent Now</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                  Nissan GT-R
                </h5>{" "}
                <i
                  style={{
                    fontSize: "1.3rem",
                    color: "gray",
                    position: "absolute",
                    top: "1.5rem",
                    left: "14rem",
                  }}
                  className="far"
                >
                  &#xf004;
                </i>
                <p style={{ color: "gray" }}>Sport</p>
                <img
                  src="https://thumbs.dreamstime.com/b/white-sport-car-side-view-9404381.jpg"
                  className="card-img-top"
                  alt="Car 2"
                />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ color: "gray" }}
                >
                  <p>
                    <i className="fa-solid fa-gas-pump mx-1"></i>80L
                  </p>
                  <p>
                    <i className="fa-solid fa-gear mx-1"></i>Manual
                  </p>
                  <p>
                    <i className="fa-solid fa-user-group mx-1"></i>2 People
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <span
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    $80.00/
                    <span style={{ color: "gray", fontSize: "1rem" }}>day</span>
                  </span>
                  <button className="btn btn-primary mx-3">Rent Now</button>
                </div>
                <del style={{ color: "gray", fontSize: "1rem" }}>$100.00</del>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                  Rolls Royce
                </h5>{" "}
                <i
                  className="fa-solid fa-heart"
                  style={{
                    fontSize: "1.3rem",
                    color: "red",
                    position: "absolute",
                    top: "1.5rem",
                    left: "14rem",
                  }}
                ></i>
                <p style={{ color: "gray" }}>Sedan</p>
                <img
                  src="https://thumbs.dreamstime.com/b/beautiful-yellow-modern-super-race-car-side-view-isolated-white-background-beautiful-yellow-modern-super-race-car-side-view-100746331.jpg"
                  className="card-img-top"
                  alt="Car 3"
                />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ color: "gray" }}
                >
                  <p>
                    <i className="fa-solid fa-gas-pump mx-1"></i>70L
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
                    $96.00/
                    <span style={{ color: "gray", fontSize: "1rem" }}>day</span>
                  </span>
                  <button className="btn btn-primary mx-3">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                  Nissan GT-R
                </h5>{" "}
                <i
                  style={{
                    fontSize: "1.3rem",
                    color: "gray",
                    position: "absolute",
                    top: "1.5rem",
                    left: "14rem",
                  }}
                  className="far"
                >
                  &#xf004;
                </i>
                <p style={{ color: "gray" }}>Sport</p>
                <img
                  src="https://thumbs.dreamstime.com/b/white-sport-car-side-view-9404381.jpg"
                  className="card-img-top"
                  alt="Car 4"
                />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ color: "gray" }}
                >
                  <p>
                    <i className="fa-solid fa-gas-pump mx-1"></i>80L
                  </p>
                  <p>
                    <i className="fa-solid fa-gear mx-1"></i>Manual
                  </p>
                  <p>
                    <i className="fa-solid fa-user-group mx-1"></i>2 People
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <span
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    $80.00/
                    <span style={{ color: "gray", fontSize: "1rem" }}>day</span>
                  </span>
                  <button className="btn btn-primary mx-3">Rent Now</button>
                </div>
                <del style={{ color: "gray", fontSize: "1rem" }}>$100.00</del>
              </div>
            </div>
          </div>
        </Slider>
      ) : (
        <>

        {/* For Large Screen Code */}
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card" style={{ border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                    Koenigsegg
                  </h5>{" "}
                  <i
                    className="fa-solid fa-heart"
                    style={{
                      fontSize: "1.3rem",
                      color: "red",
                      position: "absolute",
                      top: "1.5rem",
                      left: "14rem",
                    }}
                  ></i>
                  <p style={{ color: "gray" }}>Sport</p>
                  <img
                    src="https://thumbs.dreamstime.com/b/beautiful-yellow-modern-super-race-car-side-view-isolated-white-background-beautiful-yellow-modern-super-race-car-side-view-100746331.jpg"
                    alt="Car 1"
                    className="card-img-top"
                  />
                  <div
                    className="d-flex justify-content-between mt-2"
                    style={{ color: "gray" }}
                  >
                    <p>
                      <i className="fa-solid fa-gas-pump mx-1"></i>90L
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
                      $99.00/
                      <span style={{ color: "gray", fontSize: "1rem" }}>
                        day
                      </span>
                    </span>
                    <button className="btn btn-primary mx-3">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card" style={{ border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                    Nissan GT-R
                  </h5>{" "}
                  <i
                    style={{
                      fontSize: "1.3rem",
                      color: "gray",
                      position: "absolute",
                      top: "1.5rem",
                      left: "14rem",
                    }}
                    className="far"
                  >
                    &#xf004;
                  </i>
                  <p style={{ color: "gray" }}>Sport</p>
                  <img
                    src="https://thumbs.dreamstime.com/b/white-sport-car-side-view-9404381.jpg"
                    alt="Car 1"
                    className="card-img-top"
                  />
                  <div
                    className="d-flex justify-content-between mt-2"
                    style={{ color: "gray" }}
                  >
                    <p>
                      <i className="fa-solid fa-gas-pump mx-1"></i>80L
                    </p>
                    <p>
                      <i className="fa-solid fa-gear mx-1"></i>Manual
                    </p>
                    <p>
                      <i className="fa-solid fa-user-group mx-1"></i>2 People
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span
                      style={{
                        color: "black",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      $80.00/
                      <span style={{ color: "gray", fontSize: "1rem" }}>
                        day
                      </span>
                    </span>
                    <button className="btn btn-primary mx-3">Rent Now</button>
                  </div>
                  <del style={{ color: "gray", fontSize: "1rem" }}>$100.00</del>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card" style={{ border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                    Rolls Royce
                  </h5>{" "}
                  <i
                    className="fa-solid fa-heart"
                    style={{
                      fontSize: "1.3rem",
                      color: "red",
                      position: "absolute",
                      top: "1.5rem",
                      left: "14rem",
                    }}
                  ></i>
                  <p style={{ color: "gray" }}>Sedan</p>
                  <img
                    src="https://thumbs.dreamstime.com/b/beautiful-yellow-modern-super-race-car-side-view-isolated-white-background-beautiful-yellow-modern-super-race-car-side-view-100746331.jpg"
                    alt="Car 1"
                    className="card-img-top"
                  />
                  <div
                    className="d-flex justify-content-between mt-2"
                    style={{ color: "gray" }}
                  >
                    <p>
                      <i className="fa-solid fa-gas-pump mx-1"></i>70L
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
                      $96.00/
                      <span style={{ color: "gray", fontSize: "1rem" }}>
                        day
                      </span>
                    </span>
                    <button className="btn btn-primary mx-3">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card" style={{ border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                    Nissan GT-R
                  </h5>{" "}
                  <i
                    style={{
                      fontSize: "1.3rem",
                      color: "gray",
                      position: "absolute",
                      top: "1.5rem",
                      left: "14rem",
                    }}
                    className="far"
                  >
                    &#xf004;
                  </i>
                  <p style={{ color: "gray" }}>Sport</p>
                  <img
                    src="https://thumbs.dreamstime.com/b/white-sport-car-side-view-9404381.jpg"
                    alt="Car 1"
                    className="card-img-top"
                  />
                  <div
                    className="d-flex justify-content-between mt-2"
                    style={{ color: "gray" }}
                  >
                    <p>
                      <i className="fa-solid fa-gas-pump mx-1"></i>80L
                    </p>
                    <p>
                      <i className="fa-solid fa-gear mx-1"></i>Manual
                    </p>
                    <p>
                      <i className="fa-solid fa-user-group mx-1"></i>2 People
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span
                      style={{
                        color: "black",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      $80.00/
                      <span style={{ color: "gray", fontSize: "1rem" }}>
                        day
                      </span>
                    </span>
                    <button className="btn btn-primary mx-3">Rent Now</button>
                  </div>
                  <del style={{ color: "gray", fontSize: "1rem" }}>$100.00</del>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="d-flex justify-content-between mt-5">
        <p style={{ color: "gray" }}>Recomendation Cars</p>
      </div>
    </div>
  );
};

export default PopularCars;
