import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";
import React, { Component } from "react";

export default class App extends Component {

  state = { data: [], newId : 0};

  async getNews() {
    await fetch("http://localhost:5500/api/get").then((response) =>
      response
        .json()
        .then((json) => this.setState({ data: json }))
        .catch((err) => console.log(err))
    ); 
    
  }
  takeId = (id) => {
    this.setState({newId : id})
    console.log(id)
  }


  componentDidMount() {
    this.getNews();
   
  }

  render() {
    return (
      <div>
        <Navi></Navi>
        <NaviCategory></NaviCategory>
     
        <Carousel></Carousel>
        <Cards newInfo = {this.takeId} info={this.state.data}></Cards>
      </div>
    );
  }
}
