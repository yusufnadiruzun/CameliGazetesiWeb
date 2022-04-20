import React, {useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { get_new } from "../redux/actionTypes";

function Cards() {
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  console.log("news : ", news);
  return (
    <div className="container mt-2">
      <div className="row ">
        {news.map((index) => (
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3" key={index.id}>
            <div className="card  my-2">
              <img
                src={index.image}
                style={{ width: "214px", height: "214px" }}
                onClick={() => dispatch(get_new(index.id))}
                className="card-img-top w-100"
                alt="..."
              ></img>
              <div
                className="card-body "
                style={{ height: "110px", overflowX: "hidden" }}
              >
                <p className="card-text">{index.Desciription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
