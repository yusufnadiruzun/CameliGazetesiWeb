import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Navi extends Component {

  render() {
    return (

        <div >
          <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
            <div className="container-fluid">
              <img
              alt=""
                className="logoFirst"
                src="logo.jpeg"
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
