import { getFeed, getMoreRec } from "../../api/feed";
import { SET_FEED, SET_MORE_FEED } from "../actions/types";
import { createAnswerByFeed } from "../../models";

export const getFeedData = () => async (dispatch) => {
  if (process.env.REACT_APP_ENV === "dev") {
    console.log("dev");
    const datas = [
      {
        id: "answerID",
        content: "test contet test contet test contet test contet test contet",

        author: {
          id: "authorID",
          type: "doctor",
          name: "Kevin",
          avatar_url:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        },

        question: {
          id: "questionID",
          title: "questionTitle",
        },
      },
      {
        id: "answerID",
        content: "test contet test contet test contet test contet test contet",

        author: {
          id: "authorID",
          type: "doctor",
          name: "Kevin",
          avatar_url:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        },

        question: {
          id: "questionID",
          title: "questionTitle",
        },
      },
      {
        id: "answerID",
        content: "test contet test contet test contet test contet test contet",

        author: {
          id: "authorID",
          type: "doctor",
          name: "Kevin",
          avatar_url:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        },

        question: {
          id: "questionID",
          title: "questionTitle",
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
    const feedData = await getFeed().then((res) => {
      const datas = res.data;

      const feedList = datas
        .map((data) => {
          const targetData = data.target;
          return createAnswerByFeed(targetData);
        })
        .filter((item) => item !== null);

      const next = res.paging.next;
      const nextRecUrl = next;

      return { feedList, nextRecUrl };
    });
    dispatch({
      type: SET_FEED,
      payload: feedData,
    });
  }
};

export const getNextPageRecData = (param) => async (dispatch) => {
  const feedData = await getMoreRec(param).then((res) => {
    const datas = res.data;

    const feedList = datas
      .map((data) => {
        const targetData = data.target;

        if (targetData.type === "answer") {
          return createAnswerByFeed(targetData);
        }
        return null;
      })
      .filter((item) => item !== null);

    const next = res.paging.next;
    const nextRecUrl = next;

    return { feedList, nextRecUrl };
  });
  dispatch({
    type: SET_MORE_FEED,
    payload: feedData,
  });
};
