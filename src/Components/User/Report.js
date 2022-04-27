import React from "react";
import {  useSelector } from "react-redux";

function Report() {
  const {report} = useSelector((state) => state.news)
  const state = [
   report
  ];
    console.log(state)
  return (
    <div className="container">
    <div className="row mt-3">
      {state.map(reports => (
      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 " key ={reports.id} >
        <h1> {reports.Desciription}</h1>
        <p className="firstP">
          {reports.report}
        </p>
        <img
        alt=""
          src={reports.image}
          style={{ width: "100%", heigth: "400px" }}
        ></img>
        <p>
          {" "}
          {reports.report}
        </p>
        <img
        alt=""
          src={reports.image}
          style={{ width: "100%", heigth: "400px", marginTop: "5px" }}
        ></img>{" "}
        <img
        alt=""
          src={reports.image}
          style={{ width: "100%", heigth: "400px", marginTop: "5px" }}
        ></img>
        <img
        alt=""
          src={reports.image}
          style={{ width: "100%", heigth: "400px", marginTop: "5px" }}
        ></img>
       
      </div>
       ))}
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div className="card my-2">
          <img
            src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            style={{ width: "214px", height: "214px" }}
            className="card-img-top w-100"
            alt="..."
          ></img>
          <div
            className="card-body "
            style={{ height: "110px", overflowX: "hidden" }}
          >
            <p className="card-text">
              Notice the use of %PUBLIC_URL% in the tags above. It will be
              replaced with the URL of the `public` folder during the build.
              Only files inside the `public` folder can be referenced from
              the HTML. Unlike "/favicon.ico" or "favicon.ico",
              "%PUBLIC_URL%/favicon.ico" will work correctly both with
              client-side routing and a non-root public URL. Learn how to
              configure a non-root public URL by running `npm run build`.
            </p>
          </div>
        </div>

        <div className="card my-2">
          <img
            src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            style={{ width: "214px", height: "214px" }}
            className="card-img-top w-100"
            alt="..."
          ></img>
          <div
            className="card-body "
            style={{ height: "110px", overflowX: "hidden" }}
          >
            <p className="card-text">
              Notice the use of %PUBLIC_URL% in the tags above. It will be
              replaced with the URL of the `public` folder during the build.
              Only files inside the `public` folder can be referenced from
              the HTML. Unlike "/favicon.ico" or "favicon.ico",
              "%PUBLIC_URL%/favicon.ico" will work correctly both with
              client-side routing and a non-root public URL. Learn how to
              configure a non-root public URL by running `npm run build`.
            </p>
          </div>
        </div>

        <div className="card my-2">
          <img
            src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            style={{ width: "214px", height: "214px" }}
            className="card-img-top w-100"
            alt="..."
          ></img>
          <div
            className="card-body "
            style={{ height: "110px", overflowX: "hidden" }}
          >
            <p className="card-text">
              Notice the use of %PUBLIC_URL% in the tags above. It will be
              replaced with the URL of the `public` folder during the build.
              Only files inside the `public` folder can be referenced from
              the HTML. Unlike "/favicon.ico" or "favicon.ico",
              "%PUBLIC_URL%/favicon.ico" will work correctly both with
              client-side routing and a non-root public URL. Learn how to
              configure a non-root public URL by running `npm run build`.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Report;
