import "./App.css";
import Navi from "./User/Navi";
import NaviCategory from "./User/NaviCategory";
import Carousel from "./User/Carousel";
import Cards from "./User/Cards";
import Report from "./User/Report";
import Login from "./Admin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllNews, getNew } from "../redux/actionTypes";
import NewsList from "./Admin/NewsList";
import AddNewReport from "./Admin/AddNewReport";
import CategoryList from './Admin/CategoryList'

class App extends Component {

  async componentWillMount() {
    await this.props.getNews();
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
              path="/cameligazetesi.com/login"
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
               path="cameligazetesi.com/admin/NewsList"
               element={
                 <React.Fragment>
                   <Navi></Navi>
                   <div className="container">
                     <div className="row">
                       <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                         <CategoryList></CategoryList>
                       </div>
                       <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
                         <NewsList></NewsList>
                       </div>
                     </div>
                   </div>
                 </React.Fragment>
              }
              
            />

            <Route
              path="cameligazetesi.com/admin/AddReport"
              element={
                <React.Fragment>
                  <Navi></Navi>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                        <CategoryList></CategoryList>
                      </div>
                      <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
                        <AddNewReport></AddNewReport>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              }
            />
{/*             
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
            /> */}
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
    getNew: () => {
      dispatch(getNew());
    },
  };
}

function mapStateToProps(state) {
  return {
    news: state.result.getAllNewsReducer,
    path: state.result.path,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
