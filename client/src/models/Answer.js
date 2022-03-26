import { Author } from "./Author";
import { Question } from "./Question";

// class Answer {
//   constructor(data = {}) {
//     Object.assign(
//       this,
//       {
//         type: "",
//         id: "",
//         thumbnail: "",
//         excerpt: "",
//         updated_time: "",
//         content: "",
//         comment_count: "",
//         vote_count: "",
//         author: null,
//         question: null,
//         followers: [],
//       },
//       data
//     );
//   }
// }
class Answer {
  constructor(data = {}) {
    Object.assign(
      this,
      {
        id: "",
        content: "", //content is just the content of answer
        author: null,
        questionId: null, //pass in question Id
      },
      data
    );
  }
}

function createAnswerByFeed(data) {
  return new Answer({
    id: data.id,
    content: data.content,

    author: new Author({
      id: data.author.id,
      type: data.author.type,
      name: data.author.name,
      avatar_url: data.author.avatar_url,
    }),

    question: new Question({
      id: data.question.id,
      title: data.question.title,
    }),
  });
}

function createAnswerByQuestion(data) {
  return new Answer({
    id: data.id,
    type: data.type,
    // thumbnail: data.thumbnail,
    excerpt: data.excerpt,
    content: data.content,
    comment_count: data.comment_count,
    voteup_count: data.voteup_count || data.vote_count,
    updated_time: data.updated_time,

    author: new Author({
      id: data.author.id,
      type: data.author.type,
      name: data.author.name,
      avatar_url: data.author.avatar_url,
      headline: data.author.headline,
    }),
    question: new Question({
      id: data.question.id,
      title: data.question.title,
    }),
  });
}

export { Answer, createAnswerByFeed, createAnswerByQuestion };
