import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";
import React, { Component } from "react";
import Report from "./Report";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = { data: [], newId: 0, path: "path" };

  async getNews() {
    await fetch("http://localhost:5500/getNews").then((response) =>
      response
        .json()
        .then((json) => this.setState({ data: json }))
        .catch((err) => console.log(err))
    );
  }

  async getNew() {
    await fetch("http://localhost:5500/getNew", {
      method: "POST",
      body: JSON.stringify({ newId: this.state.newId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    console.log("asdsqdaklsjdajsk");
    console.log(this.state.path);
    console.log(this.state.newId);
  }
  takeId = (id, newPath) => {
    this.state.newId = id;
    console.log(this.state.path);
    this.state.path = newPath.trim().replaceAll(" ", "-");
    console.log(this.state.path);

    console.log(`/cameligazetesi.com/${this.state.path}`);
    console.log("/cameligazetesi.com/" + this.state.path);
    this.getNew();

    setTimeout(() => {
      window.location.href =
        "http://localhost:3000/cameligazetesi.com/" + this.state.path;
    }, 2000);
  };

  componentDidMount() {
    this.getNews();
  }

  render() {
    return (
      <div>
        <Navi></Navi>
        <NaviCategory></NaviCategory>
        <BrowserRouter>
          <Routes>
            <Route
              path="/cameligazetesi.com"
              element={
                <div>
                  <Carousel></Carousel>
                  <Cards newInfo={this.takeId} info={this.state.data}></Cards>
                </div>
              }
            />
            <Route
              path={"/cameligazetesi.com/:newId" + this.state.path}
              element={<Report></Report>}
            />
             <Route
              path={'*'}
              element={<div> ERROR </div>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
