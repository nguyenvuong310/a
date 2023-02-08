import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import "./feedback.scss";
import LocImage from "../../assets/images/loc_background.jpg";
import KhanhImage from "../../assets/images/khanh_background.jpg";
import ThuanImage from "../../assets/images/thuan_background.jpg";
import DiemImage from "../../assets/images/diem_background.png";
import TueImage from "../../assets/images/tue_background.jpg";
import HiepImage from "../../assets/images/hiep_background.jpg";
import LogoHome from "../../assets/images/logo.png";
import RoadBackground from "../../assets/images/background_road.jpg";
class Feedback extends Component {
  render() {
    return (
      <div class="feedback-container">
        <div class="feedback-background-road">
          <h1>
            Cảm nhận của các bạn là động lực lớn nhất để chúng tôi phát triển và
            hoàn thiện
          </h1>
          <span>Khách hàng là thượng đế</span>
        </div>
        <div class="feedback-header">
          <div class="feedback-header-rating">
            <h3>Đánh giá của khách hàng</h3>
            <i class="far fa-star checked"></i>
            <i class="far fa-star checked"></i>
            <i class="far fa-star checked"></i>
            <i class="far fa-star checked"></i>
            <i class="far fa-star checked"></i>
            <span>
              4.9 sao của <i>30 lượt đánh giá</i>
            </span>
          </div>

          <button class="feedback-button">Viết lời nhận xét</button>
        </div>
        <div class="feedback-layout">
          <div class="feedback-layout-item">
            <div class="layout-item-head">
              <div class="layout-item-background"></div>
              <div class="layout-item-image">
                <img src={LocImage}></img>
              </div>
            </div>
            <h3 class="layout-item-name">Nguyễn Minh Lộc</h3>
            <div class="layout-item-rating">
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
            </div>
            <p class="layout-item-description">
              Tôi đã đi trên nhiều hãng xe và TRAVELBK thật sự đã mang lại cảm
              giác tuyệt vời từ tiện ích trên xe đến thái độ phục vụ của nhân
              viên cũng như tài xế. Nói chung là 5 sao cho TRAVELBK!
            </p>
            <div class="layout-item-time">
              <img src={LogoHome}></img>
              <span>2 tuần trước</span>
            </div>
          </div>
          <div class="feedback-layout-item">
            <div class="layout-item-image not-changed">
              <img src={TueImage}></img>
            </div>
            <h3 class="layout-item-name">Trần Nguyễn Minh Tuệ</h3>
            <div class="layout-item-rating">
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
            </div>
            <p class="layout-item-description">
              Xe đi rất êm xuyên suốt quãng đường, vì vậy tôi cảm thấy rất thoải
              mái và dễ ngủ. Nếu được chọn cho những chuyến đi xa hay công việc
              lần sau. Chắc chắn một lần nữa tôi sẽ chọn TRAVELBK!
            </p>
            <div class="layout-item-time">
              <img src={LogoHome}></img>
              <span>2 tuần trước</span>
            </div>
          </div>
          <div class="feedback-layout-item">
            <div class="layout-item-head">
              <div class="layout-item-background"></div>
              <div class="layout-item-image">
                <img src={DiemImage}></img>
              </div>
            </div>
            <h3 class="layout-item-name">Nguyễn Minh Điềm</h3>
            <div class="layout-item-rating">
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
            </div>
            <p class="layout-item-description">
              Mặc dù bị trì hoãn một chút ở khâu soát vé nhưng cũng không thể
              nào khiến TRAVELBK bị trừ điểm trong mắt tôi. Từ phong thái phục
              vụ của nhân viên và tài xế đến những tiện nghi trên xe, nói chung
              tất cả tôi đều đánh giá rất cao.
            </p>
            <div class="layout-item-time">
              <img src={LogoHome}></img>
              <span>2 tuần trước</span>
            </div>
          </div>
          <div class="feedback-layout-item">
            <div class="layout-item-image not-changed">
              <img src={ThuanImage}></img>
            </div>
            <h3 class="layout-item-name">Nguyễn Viết Thuận</h3>
            <div class="layout-item-rating">
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
            </div>
            <p class="layout-item-description">
              TRAVELBK thật sự đã để lại ấn tượng đầu tiên rất tốt cho tôi. Nếu
              như các hãng xe khác từ trước tới giờ ít nhiều đã để lại những
              trải nghiệm không tốt thì thật sự TRAVELBK đã xóa bỏ hoàn toàn
              những định kiến ấy và giúp tôi có những trải nghiệm tốt nhất!
            </p>
            <div class="layout-item-time">
              <img src={LogoHome}></img>
              <span>2 tuần trước</span>
            </div>
          </div>
          <div class="feedback-layout-item">
            <div class="layout-item-head">
              <div class="layout-item-background"></div>
              <div class="layout-item-image">
                <img src={KhanhImage}></img>
              </div>
            </div>
            <h3 class="layout-item-name">Phạm Quang Khánh</h3>
            <div class="layout-item-rating">
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
            </div>
            <p class="layout-item-description">
              Xe đi êm, thái độ phục vụ ngoan hiền, dễ thương của nhân viên, rất
              tiện ích và thuận lợi đặc biệt cho những chuyến đi đường dài, 10
              điểm! Đó là tất cả những gì tôi có thể nói về TRAVELBK.
            </p>
            <div class="layout-item-time">
              <img src={LogoHome}></img>
              <span>2 tuần trước</span>
            </div>
          </div>
          <div class="feedback-layout-item">
            <div class="layout-item-image not-changed">
              <img src={HiepImage}></img>
            </div>
            <h3 class="layout-item-name">Vũ Phan Đình Hiệp</h3>
            <div class="layout-item-rating">
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
              <i class="far fa-star checked"></i>
            </div>
            <p class="layout-item-description">
              Mặc dù giá vé rất rẻ nhưng thật sự mà nói chất lượng của TRAVELBK
              từ tiện nghi đến thái độ phục vụ không thua kém gì các hãng xe lớn
              và nổi tiếng từng đi. Nếu có cơ hội cho những chuyến đi đường dài
              lần sau, chắc chắn tôi sẽ chọn TRAVELBK một lần nữa.
            </p>
            <div class="layout-item-time">
              <img src={LogoHome}></img>
              <span>2 tuần trước</span>
            </div>
          </div>
        </div>
        <div class="feedback-fill"></div>
        <div class="feedback-submit">
          <input
            type="text"
            name=""
            id="feedback-fill-form"
            placeholder="Vui lòng nhập phản hồi của bạn"
          />
        </div>
        <button class="feedback-submit-button">Gửi</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
