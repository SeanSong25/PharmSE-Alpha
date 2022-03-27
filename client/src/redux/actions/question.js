import { getQuestion } from "../../api/question";
import { SET_QUESTION } from "./types";
import { createQuestionByAnswer } from "../../models";

export const getQuestionData = (questionID) => async (dispatch) => {
  if (process.env.REACT_APP_ENV === "dev") {
    console.log("dev");
    const question = {
      id: "questionID1",
      title: "Question1",
      content: "This is a question content",
      author: {
        id: "authorID",
        type: "patient",
        name: "Kevin",
        avatar_url:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
      },
      answer: [
        {
          id: "answerID2",
          content:
            "answerID2                   test contet test contet test contet test contet test contet",

          author: {
            id: "authorID",
            type: "doctor",
            name: "Kevin",
            avatar_url:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          },
        },
        {
          id: "answerID3",
          content:
            "answerID3                   test contet test contet test contet test contet test contet",

          author: {
            id: "authorID",
            type: "doctor",
            name: "Kevin",
            avatar_url:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          },
        },
        {
          id: "answerID4",
          content:
            "answerID4                   test contet test contet test contet test contet test contet",

          author: {
            id: "authorID",
            type: "doctor",
            name: "Kevin",
            avatar_url:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          },
        },
        {
          id: "answerID5",
          content:
            "answerID5                   test contet test contet test contet test contet test contet",

          author: {
            id: "authorID",
            type: "doctor",
            name: "Kevin",
            avatar_url:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          },
        },
        {
          id: "answerID6",
          content:
            "answerID6                   test contet test contet test contet test contet test contet",

          author: {
            id: "authorID",
            type: "doctor",
            name: "Kevin",
            avatar_url:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          },
        },
        {
          id: "answerID7",
          content:
            "answerID7                   test contet test contet test contet test contet test contet",

          author: {
            id: "authorID",
            type: "doctor",
            name: "Kevin",
            avatar_url:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          },
        },
        {
          id: "answerID8",
          content:
            "answerID8                   test contet test contet test contet test contet test contettest contet test contet test contet test contet test contettest contet test contet test contet test contet test contet",

          author: {
            id: "authorID",
            type: "doctor",
            name: "Kevin",
            avatar_url:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          },
        },
      ],
    };

    dispatch({
      type: SET_QUESTION,
      payload: { question },
    });
  } else {
    //TODO::finish getQuestion
    const questionData = await getQuestion(questionID).then((res) => {
      const question = createQuestionByAnswer(res.data);

      return { question };
    });
    dispatch({
      type: SET_QUESTION,
      payload: questionData,
    });
  }
};
