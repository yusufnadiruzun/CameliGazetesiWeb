import { GET_ALL_NEWS, GET_NEW,AUTHORIZATION, REMOVEREPORT} from "../actionTypes";

const default_state = {
  news : [],
  report : [],
  path : 'haber',
  userName: '',
  isAuthorization: false
};

const reducer = (state = default_state, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { news:action.news};
      case AUTHORIZATION:
        return { ...state,userName: action.userName, isAuthorization: true};
        case REMOVEREPORT:
          return {state};
    case GET_NEW:
      console.log(action.report.path)
    return {...state,report: action.report,path:action.report.path}
      default:
        return state;
  }
  
};

export default reducer;
