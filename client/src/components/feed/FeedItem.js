import React, { Component } from "react";

import AnswerDescription from "../../components/answer-brief/AnswerDescription";
import AnswerDetail from "../../components/answer-detail/AnswerDetail";
import AuthorInfo from "../../components/author-info/AuthorInfo";

import style from "./feed-item.module.scss";

class FeedItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullContent: false,
      titleBottom: null,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.getTitleHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.getTitleHeight);
  }

  getTitleHeight = () => {
    const titleDom = this.titleRef;
    const bottom = titleDom.getBoundingClientRect().bottom;
    this.setState({ titleBottom: bottom });
  };

  showFullContent() {
    this.setState({ fullContent: true });
  }
  closeFullContent() {
    this.setState({ fullContent: false });
  }

  render() {
    const { id, title, question = null, author, content } = this.props.item;
    const titleRes = title || question.title;
    const { name: authorName } = author;

    const excerptSubstr = `${
      authorName ? authorName : "Anonymouse User"
    }: ${content.substr(0, 70)}...`;

    const answerData = { excerptSubstr };

    const answerDataDetail = {
      author,
      content,
    };

    return (
      <div className={style.card}>
        <h2 className={style.title} ref={(ref) => (this.titleRef = ref)}>
          <a
            target="_blank"
            href={`/question/${question.id}`}
            rel="noopener noreferrer"
          >
            {titleRes}
          </a>
        </h2>

        {!this.state.fullContent ? (
          <div>
            <AnswerDescription
              answerData={answerData}
              showFullContent={(e) => this.showFullContent()}
            />
          </div>
        ) : (
          <div>
            <AuthorInfo author={author} />
            <AnswerDetail answerDataDetail={answerDataDetail} />
          </div>
        )}
      </div>
    );
  }
}

export default FeedItem;
