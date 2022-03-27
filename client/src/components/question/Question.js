import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionItem from "./QuestionItem";
import Answer from "./answer/Answer";
import Loading from "../../components/loading/Loading";

import { getQuestionData } from "../../redux/actions/question";

import style from "./question.module.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAnswer: false,
      answerList: [],
    };
  }

  componentDidMount() {
    this.loadQuestionData();
  }

  loadQuestionData = () => {
    if (!this.props.answerData) {
      console.log(window.location.pathname.split("/").pop());
      this.props.getQuestion(window.location.pathname.split("/").pop());
    }
  };

  handleOpenAnswer = () => {
    this.setState({ openAnswer: true });
  };

  handleCloseAnswer = () => {
    this.setState({ openAnswer: false });
  };

  render() {
    const { questionData } = this.props;
    console.log(questionData);
    let answerList = [];

    if (questionData !== undefined) {
      console.log(questionData);
      console.log(answerList);
      answerList = this.props.questionData.answers?.map((item, i) => {
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
                onClick={this.handleOpenAnswer}
              >
                Answer
              </button>
            </div>
          </div>
          <div className={style.answerContainer}>
            <div className={style.answerList}>{answerList}</div>
          </div>
          <Answer
            openAnswer={this.state.openAnswer}
            handleClose={this.handleCloseAnswer}
            questionId={questionData.questionId}
            loadQuestionData={this.loadQuestionData}
          />
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
    getQuestion: (data) => dispatch(getQuestionData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
