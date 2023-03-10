import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import SectionWhy from "./section/why";
import ZaloContact from "./zaloContact";
import "./HomePage.scss"; // file scss chung cho section
//

//

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <SectionWhy />
        <ZaloContact />
        {/* <HomeFooter /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
