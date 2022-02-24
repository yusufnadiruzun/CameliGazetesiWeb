import React, { Component } from "react";

export default class Cards extends Component {

  

  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          {this.props.info.map(news => (
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

// 00 11 000 111 100 011 10011 00011

// 00 11 001 110 00010