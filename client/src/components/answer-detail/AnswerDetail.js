import React, { Component } from "react";

import style from "./answer-detail.module.scss";

class AnswerDetail extends Component {
  render() {
    const { content } = this.props.answerDataDetail;

    return (
      <div className={style.fullContentWrapper}>
        <div>
          <div className={style.fullContent}>{content}</div>
        </div>
      </div>
    );
  }
}

export default AnswerDetail;
