import { SET_QUESTION, ASK_QUESTION, ANSWER_QUESTION } from "../actions/types";

const initialState = {
  question: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload.questionData,
      };
    case ASK_QUESTION:
      return {
        ...state,
        question: action.payload.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        question: state.question.answer.push(action.payload.answer),
      };
    default:
      return state;
  }
};
