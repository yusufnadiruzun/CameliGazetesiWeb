import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Navi extends Component {
  render() {
    return (
        <div >
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <img
                className="logoFirst"
                src="https://scontent.fist6-2.fna.fbcdn.net/v/t1.18169-9/18194115_1636663239707409_1950421362261823333_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2WW0PPItqu0AX8lmRIh&_nc_ht=scontent.fist6-2.fna&oh=00_AT9aGwWp7ZTRXrQSIXH62RtTIMvLYmhsn1lh96ICxnJswQ&oe=6232DADB"
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              ></img>
              <a
                className="navbar-brand"
                style={{ marginLeft: "20px", color: "white" }}
                href="#"
              >
                Çameli Gazetesi
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      style={{ color: "white" }}
                      href="#"
                    >
                      Hakkımızda
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" style={{ color: "white" }} href="#">
                      Sosyal Medya
                    </a>
                  </li>
                </ul>
              </div>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Haber Ara"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Ara
                </button>
              </form>
            </div>
          </nav>
        
      </div>
    );
  }
}
