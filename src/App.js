import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";

import React, { Component } from "react";

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Navi></Navi>
        <NaviCategory></NaviCategory>
        <Carousel></Carousel>
        <Cards></Cards>
      </div>
    );
  }
}
