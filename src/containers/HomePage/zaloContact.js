import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./zaloContact.scss"; // file scss chung cho section
//
import HomeFooter from "./HomeFooter";
//
import logoHome from "../../assets/images/zalo.png";
class ZaloContact extends Component {
  render() {
    return (
      <div className="containerr">
        <section class="support1">
          <div>
            <div class="visible-desktop">
              <a
                target="_blank"
                href="https://www.facebook.com/vuongtheking.nguyen.9"
              >
                {" "}
                <img alt="" src={logoHome} />
              </a>
            </div>
          </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ZaloContact);
