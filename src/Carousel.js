import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards'
export default class Carousel extends Component {

  write(){
    console.log('eben')
  }
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 col-lg-9 pe-4">
            <div
              id="carouselExampleIndicators"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner" style={{ height: "600px" }}>
                <div className="carousel-item active" onClick={this.write}>
                  <img
                    src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
                    className="d-block w-100"
                    style={{ height: "600px" }}
                    
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t39.30808-6/273902528_1700321783647889_1847937133427688023_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Ba4muBEhxJUAX8rWLRW&_nc_oc=AQlxXwIHcYayj5aBO0SOO313oKoMDuFI4LEoCq8lvC0oYFFkyIXQ4-OVUNdZue0jJPA&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT-_3gN6T8Shjmc3q61u5tPi1ZRD7o--dUDAABVUN1NzOw&oe=62181D22"
                    className="d-block w-100"
                    style={{ height: "600px" }}
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
                    className="d-block w-100"
                    style={{ height: "600px" }}
                    alt="..."
                  ></img>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 ">
            <div className="card my-2">
              <img
                src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
                className="card-img-top w-100"
                alt="..."
              ></img>
              <div className="card-body ">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card my-2">
              <img
                src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
                className="card-img-top w-100"
                alt="..."
              ></img>
              <div className="card-body ">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
             
            
          </div>
        </div>
       
      </div>
      
      


    );
  }
}
