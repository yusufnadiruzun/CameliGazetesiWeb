import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";
import React, { Component } from "react";


export default class App extends Component {

  state = { data: [], newId : 0};

  async getNews() {
    await fetch("http://localhost:5500/getNews").then((response) =>
      response
        .json()
        .then((json) => this.setState({ data: json }))
        .catch((err) => console.log(err))
    ); 
    
  }

async getNew(){
       await fetch("http://localhost:5500/getNew",{
        method :'POST',
        body : JSON.stringify({newId : this.state.newId}),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    
    }).then(response => response.json()).then(json => console.log(json))
  }
  takeId = (id) => {
    this.setState({newId : id})
    this.getNew();
    console.log(id)
  }


  componentDidMount(){
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
