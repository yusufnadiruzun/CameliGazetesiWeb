import { GET_ALL_NEWS, GET_NEW } from "../actionTypes";

const default_state = {
  news : [],
  report : {},
  isReceive: false
};

const reducer = (state = default_state, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return {...state, news:action.news};
    case GET_NEW:
    return {...state,report: action.report,getNew : action.isReceive}
      default:
        return state;
  }
  
};

export default reducer;
