import React, { Component } from "react";
import { connect } from "react-redux";

import FeedItem from "./FeedItem";
import { getFeedData, getNextPageRecData } from "../../redux/actions/feed";
import throttle from "../../utils/throttle";
import extractUrlValue from "../../utils/urlparam";
import Loading from "../../components/loading/Loading";

import style from "./feed.module.scss";

class Feed extends Component {
  state = {
    getMoreData: true,
  };

  componentDidMount() {
    this.loadFeedData();
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  loadFeedData = () => {
    if (this.props.feedData.length === 0) {
      this.props.getFeed();
    }
  };

  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let windowHeight = document.body.clientHeight;
    let scrollHeight = document.body.scrollHeight;

    if (scrollTop + windowHeight >= scrollHeight - 100) {
      this.addMore();
    }
  };

  addMore = throttle(async () => {
    this.setState({
      getMoreData: false,
    });
    let param = {
      page_number: undefined,
      after_id: undefined,
      limit: 6,
      action: "down",
    };
    param.page_number = extractUrlValue("page_number", this.props.nextRecUrl);
    param.after_id = extractUrlValue("after_id", this.props.nextRecUrl);

    await this.props.getNextPageRecData(param);
    this.setState({
      getMoreData: true,
    });
  }, 2000);

  render() {
    const { feedData } = this.props;
    console.log(feedData);
    let feedList = [];
    if (feedData.length > 0) {
      feedList = this.props.feedData.map((item, i) => {
        return <FeedItem item={item} key={i} />;
      });
    }
    if (!this.state.getMoreData) {
      feedList.push(
        <div className={style.loading}>
          <Loading type={"bars"} color={"lightgrey"} />
        </div>
      );
    }

    return <div className={style.feed}>{feedList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    feedData: state.feed.feedList,
    nextRecUrl: state.feed.nextRecUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeed: () => dispatch(getFeedData()),
    getNextPageRecData: (param) => dispatch(getNextPageRecData(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
