import React, { Component } from "react";

import AnswerDetail from "../../components/answer-detail/AnswerDetail";
import AuthorInfo from "../../components/author-info/AuthorInfo";

import style from "./question-item.module.scss";

class QuestionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullContent: false,
      titleBottom: null,
    };
  }

  render() {
    const { id, title, question = null, author, content } = this.props.item;

    const answerDataDetail = {
      author,
      content,
    };

    return (
      <div className={style.card}>
        <div>
          <AuthorInfo author={author} />
          <AnswerDetail answerDataDetail={answerDataDetail} />
        </div>
      </div>
    );
  }
}

export default QuestionItem;
