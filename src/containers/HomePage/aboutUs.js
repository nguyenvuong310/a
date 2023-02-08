import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import thangBackground from "../../assets/images/background_thang.jpg";
import tanBackground from "../../assets/images/background_tan.jpg";
import vuongBackground from "../../assets/images/background_vuong.jpg";
import duongBackground from "../../assets/images/background_duong.jpg";
import logoHome from "../../assets/images/logo.png";
import logoSymbol from "../../assets/images/symbol.jpg";
import "./aboutUs.scss"; // file scss chung cho section
//

//

class AboutUS extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="containerr">
          <div className="containerr-up"></div>
        </div>
        <div class="aboutUs-header">
          <h1>Giới thiệu về thành viên của nhóm</h1>
          <p>Từ những ý tưởng nhỏ xây dựng ước mơ lớn!</p>
        </div>

        <div class="aboutUs-information">
          <p>
            TravelBK là website được phát triển bởi các thành viên trong nhóm
            hoạt động trong lĩnh vực thương mại điện tử - chuyên cung cấp các
            dịch vụ vé xe giá rẻ. TravelBK có hệ thống Đặt vé xe trực tuyến tại
            website ..... với các mức giá phù hợp cho học sinh, sinh viên phục
            vụ đặc biệt cho những ngày dịp lễ.
          </p>
          <img src={logoSymbol}></img>
          <div class="aboutUs-information-description">
            <img src={logoHome}></img>
            <span>TRAVELBK - Chuyến xe tình thương cho mọi sinh viên</span>
          </div>

          <h2>Gặp gỡ thành viên</h2>
          <p class="sub-information">
            Chúng tôi, những thành viên cũng như nhà phát triển của dự án
            TravelBK, là sinh viên Bách Khoa K20 và K21. Nhận thấy được vấn đề
            chung của các bạn sinh viên trong trường, xuất phát từ chung ý tưởng
            nên chúng tôi hội lại với nhau để cùng phát triển sản phẩm này để hỗ
            trợ các bạn sinh viên.
          </p>
          <ul class="aboutUs-member">
            <li>
              <img src={thangBackground}></img>
              <p class="member-name">Nguyễn Quốc Thắng</p>
              <p class="member-position">Trưởng nhóm</p>
              <a href="https://www.facebook.com/profile.php?id=100012262212378">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <img src={tanBackground}></img>
              <p class="member-name">Nguyễn Hoàng Duy Tân</p>
              <p class="member-position">Phó nhóm</p>
              <a href="https://www.facebook.com/n.h.d.tan.17.11.03">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <img src={vuongBackground}></img>
              <p class="member-name">Nguyễn Trung Vương</p>
              <p class="member-position">Thành viên</p>
              <a href="https://www.facebook.com/vuongtheking.nguyen.9">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <img src={duongBackground}></img>
              <p class="member-name">Lê Thanh Dương</p>
              <p class="member-position">Thành viên</p>
              <a href="https://www.facebook.com/duongle.2k2">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUS);
