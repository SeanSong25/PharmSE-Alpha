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

class Question {
  constructor(data = {}) {
    Object.assign(
      this,
      {
        title: "", // question
        author: null, // publisher
        pic: "",
        comment_count: "", // number of replies
        thumbnail: "", // number of agreements
        url: "", // external link if needed
      },
      data
    );
  }
}

function createQuestionByRecommend(data) {
  return new Question({
    id: data.id,
  });
}

function createQuestionByHot(data) {
  const { target, detail_text } = data;
  return new Question({
    type: target.type,
    id: target.id,
    title: target.title,
    url: target.url,
    excerpt: target.excerpt,
    author: null,
    detail_text: detail_text,
    thumbnail: data.children[0].thumbnail,
  });
}

export { Question, createQuestionByRecommend, createQuestionByHot };
