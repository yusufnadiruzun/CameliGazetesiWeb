import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getNew } from '../../redux/actionTypes';

function Cards() {
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("news", news);

  const HandleHistory = (reportPath) => {
    let url = "/cameligazetesi.com/" + reportPath;
    navigate(url);
  };

  return (
    <div className="container mt-2">
      <div className="row ">
        {news.map((index) => (
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3" key={index.id}>
            <div className="card  my-2">
              <img
                src={index.image}
                style={{ width: "214px", height: "214px" }}
                onClick={() => {
                  dispatch(getNew(news, index.id));
                  HandleHistory(index.path);
                }}
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
