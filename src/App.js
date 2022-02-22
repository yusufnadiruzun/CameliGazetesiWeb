import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";

import React, { Component } from "react";

export default class App extends Component {
  dba = () => {
     const express = require('express');
    const db = require('./Database')
    
    
    const app = express();
    const PORT = 3002;
    
    app.use(express.json())
    
    // Route to get all posts
    app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM posts", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
  }
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
