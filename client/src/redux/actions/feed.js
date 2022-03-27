import { SET_FEED, SET_MORE_FEED } from "../actions/types";
import { createAnswerByFeed } from "../../models";

import axios from "axios";

export const getFeedData = () => async (dispatch) => {
  if (process.env.REACT_APP_ENV === "dev") {
    console.log("dev");
    const datas = [
      {
        id: "answerID1",
        content:
          "answerID1                   test contet test contet test contet test contet test contet",

        author: {
          id: "authorID",
          type: "doctor",
          name: "Kevin",
          avatar_url:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        },

        question: {
          id: "questionID1",
          title: "Question1",
        },
      },
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

        question: {
          id: "questionID1",
          title: "Question1",
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

        question: {
          id: "questionID1",
          title: "Question1",
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

        question: {
          id: "questionID2",
          title: "Question2",
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

        question: {
          id: "questionID2",
          title: "Question2",
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

        question: {
          id: "questionID3",
          title: "Question3",
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

        question: {
          id: "questionID4",
          title: "Question4",
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

        question: {
          id: "questionID4",
          title: "Question 4",
        },
      },
    ];

    const feedList = datas
      .map((data) => {
        return createAnswerByFeed(data);
      })
      .filter((item) => item !== null);

    dispatch({
      type: SET_FEED,
      payload: { feedList },
    });
  } else {
    const feedData = await axios
      .get("http://localhost:3003/getFeed")
      .then((res) => {
        const feedList = res.data;

        // const feedList = datas
        //   .map((data) => {
        //     return createAnswerByFeed(data);
        //   })
        //   .filter((item) => item !== null);

        console.log(feedList);
        return { feedList };
      });
    dispatch({
      type: SET_FEED,
      payload: feedData,
    });
  }
};
