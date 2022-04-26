export const GET_NEW = "GET_NEW";
export const GET_ALL_NEWS = "GET_ALL_NEWS";

export function getNew(reportId) {
  return async function (dispatch) {
    
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
/*
export function changePath (reportPath) {
 setTimeout(() => {
  window.location.assign = '/cameligazetesi.com/' + reportPath
   
 }, 2000);
}
*/
export const get_new_success = (report) => {
  return {
    type: GET_NEW,
    report: report
  
    
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
