import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Report from "./Report";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllNews, getNew} from "../redux/actionTypes";

class App extends Component {

  async componentWillMount() {
    await this.props.getNews();
    await this.props.getNew();
    
  }

  componentDidMount() {
    console.log("path : ", this.props.path);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/cameligazetesi.com/Login"
              element={
                <div>
                  <Login></Login>
                </div>
              }
            />
            <Route
              path="/cameligazetesi.com"
              element={
                <div>
                  <Navi></Navi>
                  <NaviCategory></NaviCategory>
                  <Carousel></Carousel>
                  <Cards></Cards>
                </div>
              }
            />
            <Route
              path={"cameligazetesi.com/:" + this.props.path}
              element={
                <div>
                  {" "}
                  <Navi></Navi>
                  <NaviCategory></NaviCategory>
                  <Report></Report>
                </div>
              }
            />
            <Route path={"*"} element={<div> ERROR </div>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => {
      dispatch(getAllNews());
    },
    getNew :() =>{
      dispatch(getNew())
    }
    
  };
}

function mapStateToProps(state) {
  return {
    news: state.getAllNewsReducer,
    path: state.path,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
