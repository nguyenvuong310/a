import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import logoHome from "../../assets/images/logo.png";
import "./HomeFooter.scss";
class HomeFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-contain">
          <div className="footer-address">
            <div className="address-icon">
              <img src={logoHome}></img>
              <span>CÔNG TY CỔ PHẦN VTDT - TRAVELBK</span>
            </div>

            <div className="address-main">
              <h3>HỒ CHÍ MINH:</h3>
              <p>
                Địa chỉ 1: <i>268 Lý Thường Kiệt, Q.10, Tp.HCM</i>
              </p>
              <p>
                Địa chỉ 2: <i>Khu đô thị Đại học Quốc Gia Tp.HCM, Thủ Đức</i>
              </p>
              <p>Email: contact@travelbk.vn</p>
            </div>
          </div>

          <div className="footer-information">
            <h2>THÔNG TIN KHÁC</h2>
            <ul className="list-information">
              <li>Chính sách bảo mật</li>
              <li>Văn hóa doanh nghiệp</li>
              <li>Cơ hội việc làm</li>
              <li>Dành cho công ty du lịch</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h2>THEO DÕI CHÚNG TÔI</h2>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="home-footer">
          <div className="txt col-4">
            <small>Copyright © 2023 TravelBK</small>
          </div>
          <div className="icon col-8"></div>
        </div>
      </React.Fragment>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
