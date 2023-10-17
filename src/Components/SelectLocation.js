import React from "react";
import "./SelectLocation.css";

const SelectLocation = () => {
  return (
    <div className="container my-5 text-center">
      <div className="row">
        <div className="col-md-5">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body">
              <div className="form-check mb-2" style={{ marginLeft: "1.8rem" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault1"
                  style={{
                    marginLeft: "-18.5rem",
                    marginTop: "3px",
                    color: "black",
                    position: "absolute",
                    top: "1rem",
                    left: "23rem",
                  }}
                >
                  Pick-Up
                </label>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="card-text">
                    <strong>Locations</strong>
                    <br />
                    <select className="form-select" id="citySelect1">
                      <option value="city1">Select your city</option>
                      <option value="city2">City 2</option>
                    </select>
                  </p>
                </div>
                <div className="line"></div>
                <div>
                  <p className="card-text">
                    <strong>Date</strong>
                    <br />
                    <select className="form-select" id="dateSelect1">
                      <option value="date1">Select your date</option>
                      <option value="date2">Date 2</option>
                    </select>
                  </p>
                </div>
                <div className="line"></div>
                <div>
                  <p className="card-text">
                    <strong>Time</strong>
                    <br />
                    <select className="form-select" id="timeSelect1">
                      <option value="time1">Select your time</option>
                      <option value="time2">Time 2</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-2 d-flex justify-content-center mt-4"
          style={{ height: "50px", marginBottom: "25px" }}
        >
          <div
            className="d-flex align-items-center"
            style={{
              background: "#007BFF",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <i className="text-light fa-solid fa-arrow-up-long"></i>
            <i className="text-light fa-solid fa-arrow-down-long"></i>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body">
              <div className="form-check mb-2" style={{ marginLeft: "1.8rem" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault2"
                  style={{
                    marginLeft: "-18rem",
                    marginTop: "3px",
                    color: "black",
                    position: "absolute",
                    top: "1rem",
                    left: "23rem",
                  }}
                >
                  Drop-Off
                </label>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="card-text">
                    <strong>Locations</strong>
                    <br />
                    <select className="form-select" id="citySelect2">
                      <option value="city1">Select your city</option>
                      <option value="city2">City 2</option>
                    </select>
                  </p>
                </div>
                <div className="line"></div>
                <div>
                  <p className="card-text">
                    <strong>Date</strong>
                    <br />
                    <select className="form-select" id="dateSelect2">
                      <option value="date1">Select your date</option>
                      <option value="date2">Date 2</option>
                    </select>
                  </p>
                </div>
                <div className="line"></div>
                <div>
                  <p className="card-text">
                    <strong>Time</strong>
                    <br />
                    <select className="form-select" id="timeSelect2">
                      <option value="time1">Select your time</option>
                      <option value="time2">Time 2</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-between">
        <p style={{ color: "gray", marginBottom: "-45px" }}>Popular Cars</p>
        <p style={{ color: "blue", marginBottom: "-45px" }}>View All</p>
      </div>
    </div>
  );
};

export default SelectLocation;
