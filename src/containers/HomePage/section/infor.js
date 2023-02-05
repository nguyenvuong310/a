import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Infor extends Component {
  render() {
    return <div className="section-infor">Hello world</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Infor);
