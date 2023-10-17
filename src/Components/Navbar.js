import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid p-4">
          <a
            className="navbar-brand"
            href="/"
            style={{
              color: "blue",
              fontSize: "2rem",
              fontWeight: "bold",
              marginLeft: "1rem",
            }}
          >
            MORENT
          </a>

          <form className="d-flex" role="search">
            <div className="input-group">
              <span
                id="search-icon"
                className="input-group-text bg-white"
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  borderRight: "none",
                }}
              >
                <i className="fa fa-search"></i>
              </span>
              <input
                id="search"
                style={{ borderRight: "none", borderLeft: "none" }}
                className="form-control me-2"
                type="search"
                placeholder="Search something here"
                aria-label="Search"
              />
              <span
                id="slider"
                className="input-group-text bg-white"
                style={{
                  borderLeft: "none",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                <i className="fas bg-white my-auto">&#xf1de;</i>
              </span>
            </div>
          </form>

          <div className="circle d-flex">
            <div
              className="rounded-circle bg-white mx-1 d-none d-sm-block"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i
                className="fa-solid fa-heart"
                style={{ fontSize: "1.3rem", margin: "9.5px" }}
              ></i>
            </div>
            <div
              className="rounded-circle bg-white mx-1 d-none d-sm-block position-relative"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i
                className="fas fa-bell"
                style={{ fontSize: "1.3rem", margin: "9.5px" }}
              ></i>
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
            </div>
            <div
              className="rounded-circle bg-white mx-1 d-none d-sm-block"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i
                className="fas fa-cog"
                style={{ fontSize: "1.3rem", margin: "9.5px" }}
              ></i>
            </div>
            <div
              id="nav-img"
              className="rounded-circle bg-white mx-1"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
