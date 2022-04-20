export const GET_NEW = "GET_NEW";
export const GET_ALL_NEWS = "GET_ALL_NEWS";


export function get_new(reportId){
  return async function getNew() {
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
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    return {
      type: GET_NEW,
      report: report,
    };
  };
};


export const get_news_success = (news) => {
  console.log("naber");
  console.log(news);
  return {
    type: GET_ALL_NEWS,
    news: news,
  };
};


export function get_all_news() {
  return (dispatch) => {
    console.log("sasdaajsjjlklk");
    return fetch("http://localhost:5500/getNews")
      .then((response) =>
        response.json().then((json) => dispatch( get_news_success(json)))
      )
      .catch((err) => console.log(err));
  };
}
