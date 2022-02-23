import React, { Component } from "react";

export default class Cards extends Component {
  state = { data: [] };

  click = () => {
    window.location.href = "http://www.google.com";
  };

   componentDidMount() {

    this.getNews(); 
  }

  async getNews() {
    await fetch("http://localhost:5500/api/get").then((response) =>
      response
        .json()
        .then((json) => this.setState({data : json}))
        .catch((err) => console.log(err))
    );
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          {this.state.data.map(news => (
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2">
            <div className="card my-2">
              <img
                src ={news.image} style={{width:'214px', height:'214px'}}
                className="card-img-top w-100"
                alt="..."
              ></img>
              <div className="card-body ">
                <p className="card-text" style={{width:'214px', height:'100px',overflowX :'hidden'}}>
                  {news.Desciription}
                </p>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    );
  }
}
