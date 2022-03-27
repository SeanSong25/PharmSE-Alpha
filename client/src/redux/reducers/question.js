import { SET_QUESTION } from "../actions/types";

const initialState = {
  question: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload.question,
      };
    default:
      return state;
  }
};
