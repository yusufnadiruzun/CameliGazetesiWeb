export const GET_NEW = "GET_NEW";
export const GET_ALL_NEWS = "GET_ALL_NEWS";

export function getNew(reportId) {
  return async function (dispatch) {
    console.log("asdasd");
    let report = [];
    await fetch("http://localhost:5500/getNew", {
      method: "POST",
      body: JSON.stringify({ newId: reportId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(get_new_success(json)))
      .catch((err) => console.log(err));
  };
}

export const get_new_success = (report) => {
  window.location.href = '/' + report.path 
  return {
    type: GET_NEW,
    report: report,
  };
};

export function getAllNews() {
  return (dispatch) => {
    console.log("sasdaajsjjlklk");
    return fetch("http://localhost:5500/getNews")
      .then((response) =>
        response.json().then((json) => dispatch(get_news_success(json)))
      )
      .catch((err) => console.log(err));
  };
}

export const get_news_success = (news) => {
  console.log("naber");
  console.log(news);
  return {
    type: GET_ALL_NEWS,
    news: news,
  };
};
