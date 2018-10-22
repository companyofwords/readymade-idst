import React, { Component } from "react";
import BackToTop from "react-back-to-top";

class BackTop extends Component {
  render() {
    return (
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>scroll up</span>
      </BackToTop>
    );
  }
}

export default BackTop;