import React, { Component } from "react";
import { Link } from "react-router-dom";

import Ask from "./ask/Ask";

import style from "./navbar.module.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0,
      needFixed: false,
      totalSearchBar: false,
      openAsk: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      if (!this.state.needFixed) this.setState({ needFixed: true });
    } else {
      if (this.state.needFixed) this.setState({ needFixed: false });
    }
    if (window.scrollY > 70) {
      if (!this.state.needScroll) this.setState({ needScroll: true });
    } else {
      if (this.state.needScroll) this.setState({ needScroll: false });
    }
  };

  handleSearchFocus = (e) => {
    if (e.target.tagName === "INPUT" && !this.state.totalSearchBar) {
      this.setState({ totalSearchBar: true });

      const inputDom = this.inputRef;
      const inputBtnDom = this.inputBtnRef;
      const searchBtnDom = this.searchBtn;

      inputDom.classList.add(style.focusedInput);
      inputBtnDom.classList.add(style.focusedInputBtn);
      searchBtnDom.classList.add(style.focusedSearchBtn);
    }
  };
  handleSearchBlur = (e) => {
    this.setState({ totalSearchBar: false });
    const inputDom = this.inputRef;
    const inputBtnDom = this.inputBtnRef;
    const searchBtnDom = this.searchBtn;

    inputDom.classList.remove(style.focusedInput);
    inputBtnDom.classList.remove(style.focusedInputBtn);
    searchBtnDom.classList.remove(style.focusedSearchBtn);
  };

  handleOpenAsk = () => {
    this.setState({ openAsk: true });
  };

  handleCloseAsk = () => {
    this.setState({ openAsk: false });
  };

  render() {
    return (
      <div>
        <div
          className={`${style.header} ${
            this.state.needFixed ? style.fixed : ""
          } `}
        >
          <div
            className={`${style.navBar} ${
              this.state.needScroll ? style.scrollUp : ""
            }`}
          >
            <a className={style.logo} href="/">
              <div>
                <strong>Pharma</strong>
              </div>
            </a>
            <ul className={style.tab}>
              <li className={style.tabItem}>
                <a className={style.tabLink} href="/feed">
                  Feed
                </a>
              </li>
            </ul>
            <div className={style.searchBar}>
              <div
                className={style.searchWraper}
                onFocus={(e) => this.handleSearchFocus(e)}
                onBlur={(e) => this.handleSearchBlur(e)}
                ref={(ref) => (this.inputRef = ref)}
              >
                <form className={style.form}>
                  <label htmlFor="" className={style.searchForm}>
                    <input
                      className={style.searchinput}
                      type="text"
                      placeholder="What is a healthy diet?"
                    />
                    <button
                      className={style.searchIcon}
                      ref={(ref) => (this.inputBtnRef = ref)}
                    ></button>
                  </label>
                </form>
              </div>
              <button
                className={style.button}
                ref={(ref) => (this.searchBtn = ref)}
                onClick={this.handleOpenAsk}
              >
                Ask
              </button>
            </div>
            <div className={style.userInfo}>
              <img
                className={style.headerPic}
                src={require("../../assets/header.png")}
                alt="headerImg"
              ></img>
            </div>
          </div>
        </div>

        <Ask openAsk={this.state.openAsk} handleClose={this.handleCloseAsk} />

        {this.state.needFixed ? (
          <div className={style.navBarStick}></div>
        ) : null}
      </div>
    );
  }
}

export default NavBar;
