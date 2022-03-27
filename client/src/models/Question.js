// class Question {
//     constructor(data = {}) {
//         Object.assign(this, {
//             type: "",
//             id: "",
//             title: "",
//             author: null,
//             pic: "",
//             content: "",
//             comment_count: "",
//             vote_count: "",
//             thumbnail: "",
//             url: "",
//             detail_text: "",
//         }, data)
//     }
// }

import { createAnswerByQuestion } from "./Answer";
class Question {
  constructor(data = {}) {
    Object.assign(
      this,
      {
        id: "",
        title: "", // question
        author: null, // publisher
        content: "",
        answer: [],
      },
      data
    );
  }
}

function createQuestionByFeed(data) {
  return new Question({
    id: data.id,
    title: data.title, // question
    author: data.author, // publisher
    content: data.content,
    answer: createAnswerByQuestion(data.answer),
  });
}

export { Question, createQuestionByFeed };
