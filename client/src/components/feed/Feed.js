import React, { Component } from "react";
import { connect } from "react-redux";

import FeedItem from "./FeedItem";
import { getFeedData } from "../../redux/actions/feed";
import Loading from "../../components/loading/Loading";

import style from "./feed.module.scss";

class Feed extends Component {
  state = {
    getMoreData: true,
  };

  componentDidMount() {
    this.loadFeedData();
  }

  loadFeedData = () => {
    if (this.props.feedData.length === 0) {
      this.props.getFeed();
    }
  };

  render() {
    const { feedData } = this.props;

    let feedList = [];
    if (feedData.length > 0) {
      feedList = this.props.feedData.map((item, i) => {
        return <FeedItem item={item} key={i} />;
      });
    } else {
      feedList = (
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
