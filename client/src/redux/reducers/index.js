import { combineReducers } from "redux";

import feedReducer from "./feed";

const reducer = combineReducers({
  feed: feedReducer,
});

export default reducer;
