import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./payment.scss"; // file scss chung cho section
//
import ReserTicket from "./reserTicket";
//

class PaymentGuide extends Component {
  render() {
    return (
      <div className="payment-guide">
        <div className="payment-guide-container">
          <div className="pay">
            {" "}
            <ReserTicket />
          </div>

          <div className="guide">
            <span>Hướng dẫn thanh toán</span>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentGuide);
