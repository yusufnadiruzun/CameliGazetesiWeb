import "./App.css";
import Navi from "./Navi";
import NaviCategory from "./NaviCategory";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Report from "./Report";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { get_all_news } from "../redux/actionTypes";
 
class App extends Component {

  async componentWillMount() {
    await this.props.getNews();
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
                  <Cards></Cards>
                </div>
              }
            />
            <Route path={"/cameligazetesi.com/:"} element={<Report></Report>} />
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
      dispatch(get_all_news());
    },
  };
}

function mapStateToProps(state) {
  return {
    news: state.getAllNewsReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
