import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./payment.scss"; // file scss chung cho section
//
import ReserTicket from "./reserTicket";
//
import logoArgi from "../../assets/images/Logo-Agribank-H.webp";
import logoOCB from "../../assets/images/Logo-Ngan_hang_Phuong_Dong.png";
import logoVCB from "../../assets/images/vcbjpg.jpg";
import qrMomo from "../../assets/images/momo.webp";
import HomeFooter from "./HomeFooter";

class PaymentGuide extends Component {
  render() {
    return (
      <div className="payment-guide">
        <div className="payment-guide-container">
          <div className="pay">
            {" "}
            <ReserTicket />
          </div>
          <div className="banner-txt">
            <div className="txt">
              <span>Hướng dẫn thanh toán</span>
            </div>
          </div>
          <div className="bank">
            <div className="txt-bank">
              <span>Thanh toán qua ngân hàng</span>
            </div>
            <div class="row border rounded-lg m-0 mt-2">
              <div class="col-8 col-md-4">
                <div className="img-logo">
                  <img className="a" src={logoArgi} />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <b class="text-danger">
                  Ngân Hàng Nông Nghiệp Và Phát Triển Nông Thôn Việt Nam -
                  Agribank
                </b>
                <p></p>
                <div class="row">
                  <div class="col-4 mb-2">
                    <b>Tên tài khoản</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Số tài khoản</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Chi Nhánh</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                </div>
              </div>
            </div>
            <div class="row border rounded-lg m-0 mt-2">
              <div class="col-8 col-md-4">
                <div className="img-logo">
                  <img className="a" src={logoOCB} />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <b class="text-danger">
                  Ngân hàng Thương mại Cổ phần Phương Đông - OCB
                </b>
                <p></p>
                <div class="row">
                  <div class="col-4 mb-2">
                    <b>Tên tài khoản</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Số tài khoản</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Chi Nhánh</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                </div>
              </div>
            </div>
            <div class="row border rounded-lg m-0 mt-2">
              <div class="col-8 col-md-4">
                <div className="img-logo vcb">
                  <img className="v" src={logoVCB} />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <b class="text-danger">
                  Ngân hàng Thương mại Cổ phần Ngoại thương Việt Nam - VCB
                </b>
                <p></p>
                <div class="row">
                  <div class="col-4 mb-2">
                    <b>Tên tài khoản</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Số tài khoản</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Chi Nhánh</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="momo">
            <div className="txt-momo">
              <span>Thanh toán qua ví điện tử Momo</span>
            </div>
            <div class="row border rounded-lg m-0 mt-2">
              <div class="col-8 col-md-4">
                <div className="img-logo mm">
                  <img className="m" src={qrMomo}></img>
                </div>
              </div>
              <div class="col-12 col-md-6 txt-mm">
                <div class="row">
                  <div class="col-4 mb-2">
                    <b>Tên người dùng</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Số điện thoại</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="zalo">
            <div className="txt-zalo">
              <span>Thanh toán qua ví điện tử ZaloPay</span>
            </div>
            <div class="row border rounded-lg m-0 mt-2">
              <div class="col-8 col-md-4">
                <div className="img-logo zl">
                  <img className="z" src={qrMomo}></img>
                </div>
              </div>
              <div class="col-12 col-md-6 txt-mm">
                <div class="row">
                  <div class="col-4 mb-2">
                    <b>Tên người dùng</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                  <div class="col-4 mb-2">
                    <b>Số điện thoại</b>
                  </div>
                  <div class="col-8 mb-2">XXXXXXXXXX</div>
                </div>
              </div>
            </div>
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
