import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default class NaviCategory extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-md-10 col-lg-8 col-xl-8" >
            <ul className="nav nav-pills">
              <li className="nav-item" style={{ marginLeft: "30px" }}>
                <a className="nav-link " id="nvSon" href="#">
                  Son Dakika
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Spor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Ekonomi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Magazin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Teknoloji
                </a>
              </li>  <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Teknoloji
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Sağlık
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Çameli
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nv" href="#">
                  Denizli
                </a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-10 col-md-10 col-lg-4 col-xl-4 rates border border-2" >
            <div>
              <ul className="rate">
                <li style={{ color: "black" }}>Dolar</li>
                <li>13.12</li>
              </ul>
            </div>
            <div>
              <ul className="rate">
                <li style={{ color: "black" }}>Euro</li>
                <li>15.66</li>
              </ul>
            </div>
            <div>
              <ul className="rate">
                <li style={{ color: "black" }}>Altın</li>
                <li>792</li>
              </ul>
            </div>
            <div>
              <ul className="rate">
                <li style={{ color: "black" }}>Bitcoin</li>
                <li>33.000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
