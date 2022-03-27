import React, { Component } from "react";

import style from "./author-info.module.scss";

class AuthorInfo extends Component {
  render() {
    const { author } = this.props;

    const defaultAvatar =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png";

    return (
      <div className={style.author}>
        <img className={style.avator} src={defaultAvatar} alt="avatar" />
        <span className={style.authorName}>
          {author?.name ? author.name : "Anonymouse User"}
        </span>
      </div>
    );
  }
}

export default AuthorInfo;
