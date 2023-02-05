import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
// import "./HomeHeader.scss"; import scss tu homepage.js
import ReserTicket from "./reserTicket";
import logoHome from "../../assets/images/logo.png";
class HomeHeader extends Component {
  handleAboutUs = () => {
    alert("about us");
  };
  render() {
    return (
      <React.Fragment>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">Website đặt</div>
            <div className="title2">vé tốt nhất</div>
            <ReserTicket></ReserTicket>
          </div>
          <div className="content-down"></div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  //props
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
