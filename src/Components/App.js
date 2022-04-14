import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";
import React, { Component } from "react";
import Report from "./Report";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 

export default class App extends Component {
  
  state = { data: [], newId: 0, path: "path" , newReport : []};

    
  // sendNew = (path) => {
   
  //    navigate(this.state.path,{ state : this.state.newReport}
  //    )
  
  // }
   
  

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
      .then((json) => this.setState({ newReport : json}))
      .catch((err) => console.log(err));
      console.log("new report",this.state.newReport)
  }

  takeId = (id, newPath) => {
    this.state.newId = id;    
    this.state.path = newPath;
   //  this.sendNew(newPath)
    this.getNew();
    console.log('pathhhh',this.state.path);
    console.log('reportt',this.state.newReport);
    setTimeout(() => {
      window.location.href =
        "http://localhost:3000/cameligazetesi.com/" + this.state.path;
    }, 2000);
   
  };

  componentDidMount() {
    this.getNews();
    this.getNew();
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
              path={"/cameligazetesi.com/:" + this.state.path}
              element={<Report reports ={this.state.data}></Report>}
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
