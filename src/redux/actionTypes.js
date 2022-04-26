export const GET_NEW = "GET_NEW";
export const GET_ALL_NEWS = "GET_ALL_NEWS";

export function getNew(news, id) {
  return (dispatch) => {
    let report = [];
    for (let i = 0; i < news.length; i++) {
      if (news[i].id === id) {
        report = news[i];
        dispatch(get_new_success(report));

      }
    }
  };
}

export const get_new_success = (report) => {
  return {
    type: GET_NEW,
    report: report,
  };
};

export function getAllNews() {
  return (dispatch) => {
    return fetch("http://localhost:5500/getNews")
      .then((response) =>
        response.json().then((json) => dispatch(get_news_success(json)))
      )
      .catch((err) => console.log(err));
  };
}

export const get_news_success = (news) => {
  return {
    type: GET_ALL_NEWS,
    news: news,
  };
};
