import { SET_FEED, SET_MORE_FEED } from "../actions/types";

const initialState = {
  feedList: [],
  nextRecUrl: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED:
      return {
        ...state,
        feedList: action.payload.feedList,
        nextRecUrl: action.payload.nextRecUrl,
      };
    case SET_MORE_FEED:
      return {
        ...state,
        feedList: state.feedList.concat(action.payload.feedList),
        nextRecUrl: action.payload.nextRecUrl,
      };
    default:
      return state;
  }
};
