import { combineReducers } from "redux";

import feedReducer from "./feed";
import questionReducer from "./question";

const reducer = combineReducers({
  feed: feedReducer,
  question: questionReducer,
});

export default reducer;
