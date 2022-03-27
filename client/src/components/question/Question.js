import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionItem from "./QuestionItem";
import Loading from "../../components/loading/Loading";
import { getQuestionData } from "../../redux/actions/question";

import style from "./question.module.scss";

class Question extends Component {
  componentDidMount() {
    this.loadQuestionData();
  }

  loadQuestionData = () => {
    if (!this.props.answerData) {
      this.props.getQuestion();
    }
  };

  render() {
    const { questionData } = this.props;

    let answerList = [];

    if (questionData?.answer?.length > 0) {
      answerList = this.props.questionData.answer.map((item, i) => {
        return <QuestionItem item={item} key={i} />;
      });

      return (
        <div>
          <div className={style.questionContainer}>
            <div className={style.questionInner}>
              <div className={style.title}>{questionData.title}</div>
              <div className={style.content}>{questionData.content}</div>
              <button
                className={style.button}
                ref={(ref) => (this.searchBtn = ref)}
                onClick={this.handleOpenAsk}
              >
                Answer
              </button>
            </div>
          </div>
          <div className={style.answerContainer}>
            <div className={style.answerList}>{answerList}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.loading}>
          <Loading type={"bars"} color={"lightgrey"} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    questionData: state.question.question,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestion: () => dispatch(getQuestionData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
