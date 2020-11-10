import React from "react";
import axios from "axios";

import FeedItem from "./FeedItem/FeedItem";
import Loader from "./UI/Loader/Loader";
import Error from "../Error/Error";

class Feed extends React.Component {
  state = {
    loading: false,
    feedArray: [],
    pageLimit: 9,
    curPage: 0,
    isFeedArrayFull: false,
    error: false,
  };

  componentDidMount() {
    //loading posts on scroll
    window.addEventListener("scroll", (e) => {
      if (
        document.documentElement.clientHeight +
          document.documentElement.scrollTop >=
        document.getElementById("feed").scrollHeight - 5
      ) {
        this.setState({
          ...this.state,
          loading: true,
        });
        this.getFeed();
      }
    });

    this.getFeed();
  }
  // server request and state change
  getFeed() {
    if (this.state.isFeedArrayFull) return;
    this.setState({
      ...this.state,
      loading: true,
    });
    axios
      .get(
        `http://localhost:3004/posts?_page=${this.state.curPage + 1}&_limit=${
          this.state.pageLimit
        }`
      )
      .then((res) => {
        //checking of new data
        if (!!!res.data.length) {
          this.setState({
            ...this.state,
            loading: false,
            isFeedArrayFull: true,
          });
          return;
        }
        //adding new data portion
        this.setState({
          ...this.state,
          loading: false,
          feedArray: [...this.state.feedArray, ...res.data],
          curPage: this.state.curPage + 1,
        });
      })
      .catch((e) => {
        this.setState({
          ...this.state,
          error: true,
          loading: false,
          isFeedArrayFull: true,
        });
        console.log(this.state);
      });
  }

  render() {
    return (
      <div id="feed">
        <nav className="navbar navbar-dark bg-primary">
          <span className="navbar-brand mb-0 h1">OKO.PRESS</span>
        </nav>
        <div className="container mt-2">
          <div className="row">
            {this.state.loading && !this.state.feedArray.length ? (
              <Loader clName="full-page" />
            ) : (
              this.state.feedArray.map((el, index) => {
                return <FeedItem item={el} key={index} />;
              })
            )}
            {this.state.loading &&
            !!this.state.feedArray.length &&
            !this.state.isFeedArrayFull ? (
              <Loader clName="bottom-page" />
            ) : (
              ""
            )}
            {this.state.error ? <Error /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
