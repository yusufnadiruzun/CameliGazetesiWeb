export const GET_NEW = "GET_NEW";
export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const AUTHORIZATION = "AUTHORIZATION";
export const REMOVEREPORT = 'REMOVEREPORT';

export function removeReport (id) {
  return async (dispatch) =>{
    await fetch("http://localhost:5500/removeReport", {
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({reportId : id})
    }).then(response => response.json()).then(x => console.log('silme işlemi başarılı')).catch(err => console.log(err))
  }
}

export function removeReportSuccess () {
  return {
    type : REMOVEREPORT
  }
}

export function authorization(user_name, password) {
  return async (dispatch) => {
    await fetch("http://localhost:5500/getUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_name: user_name, password: password }),
    })
      .then((response) => response.json())
      .then((result) => dispatch(authorizationSuccess(result[0].user_name)))
      .catch((err) => console.log(err));
  };
}

export function authorizationSuccess(userName) {
  return {
    type: AUTHORIZATION,
    userName: userName
  };
}

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
