import React, { Component } from "react";

import ArrowDown from "../svg/ArrowDown";

import style from "./answer-description.module.scss";

class AnswerDescription extends Component {
  render() {
    const { answerData, showFullContent } = this.props;
    const { excerptSubstr } = answerData;

    return (
      <div className={style.contentContainer}>
        <div className={style.contentContainer}>
          <div
            className={style.contentWrapper}
            onClick={(e) => showFullContent()}
          >
            <span className={style.content}>{excerptSubstr}</span>
            <button className={style.btn}>
              Read More{" "}
              <span>
                ​​​​
                <ArrowDown />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerDescription;
