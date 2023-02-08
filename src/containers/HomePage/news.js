import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import "./news.scss";
import HueBackground from "../../assets/images/istockphoto-161712829-170667a.jpg";
import NhaTrangImage from "../../assets/images/nhatrang.jpg";
import HueImage from "../../assets/images/istockphoto-171147851-170667a.jpg";
import ChayVeXe from "../../assets/images/chayvexe.jpg";
import GiaVeGiam from "../../assets/images/giavegiam.jpg";
import GiaLaiImage from "../../assets/images/gialai.jpg";
import BinhDinhImage from "../../assets/images/binhdinh.jpg";
import HoiAnImage from "../../assets/images/hoian.jfif";

class News extends Component {
  render() {
    return (
      <div class="news-container">
        <div class="news-layout">
          <div class="news-layout-item">
            <h1>
              TRAVEBK nhận phản hồi tích cực qua từng tháng và số lượng khách
              hàng tăng vọt
            </h1>
            <span>Khi khách hàng không còn gói gọn là sinh viên!</span>
          </div>

          <div class="news-layout-item">
            <h1>
              TRAVELBK ngày càng thu hút được sự chút ý của nhiều khách hàng
              trên toàn lãnh thổ Việt Nam
            </h1>
            <span>
              Theo thống kê năm 2022, chúng tôi đã ghi dấu bánh xe trên tổng
              cộng 38 tỉnh thành với nhiều dấu ấn và ý nghĩa lớn.
            </span>
          </div>

          <div class="news-layout-item">
            <p>
              Trong năm 2023, chúng tôi sẽ tiếp tục mở rộng thêm quy mô về cả
              tuyến đường và phương tiện duy chuyển trên lãnh thổ quốc gia cũng
              như quốc tế.
            </p>
          </div>

          <div class="news-layout-item">
            <h2>TIN VUI ĐẦU NĂM</h2>
            <p>
              TRAVELBK đã thiết lập quầy bán vé tại nhiều chi nhánh ở Việt Nam.
            </p>
          </div>
        </div>

        <div class="news-content">
          <div class="news-content-title">CONTENT</div>
          <div class="news-content-real">
            <div class="news-content-events">
              <div class="news-event-item">
                <img src={HueBackground}></img>
                <p class="event-name">
                  Chuyến xe đầu tiên trong năm mới của TRAVELBK đến cố đô Huế
                </p>
                <p class="event-date">05/02/2023</p>
                <p class="event-description">
                  Vào ngày 05/02/2023, TRAVELBK đón tiếp khoảng 40 khách du lịch
                  đến thăm thành phố Huế. Theo như tài xế Nguyễn Minh Điềm chia
                  sẻ, các hành khách đã có thái độ vô cùng háo hức và rất thỏa
                  mãn về tiện nghi cũng như thái độ phục vụ của nhân viên
                  TRAVELBK. Họ rất mong muốn tiếp tục cùng đồng hành với
                  TRAVELBK ở những chuyến đi lần sau.
                </p>
              </div>
              <div class="news-event-item">
                <img src={GiaVeGiam}></img>
                <p class="event-name">
                  Giá vé xe TRAVELBK giảm mạnh sau Tết Nguyên Đán Quý Mão
                </p>
                <p class="event-date">06/02/2023</p>
                <p class="event-description">
                  Sau dịp lễ Tết Nguyên Đán Quý Mão, TRAVELBK và nhiều hãng xe
                  trên toàn quốc đã đồng loạt giảm vé xe để đáp ứng nhu cầu quay
                  trở lại thành phố làm việc của người dân trên toàn nước. Cụ
                  thể:
                </p>
                <div class="news-price">
                  Xe giường: <i>510.000 đồng</i> còn 310.000 đồng
                </div>
                <div class="news-price">
                  Xe phòng: <i>600.000 đồng</i> còn 350.000 đồng
                </div>
                <div class="news-price">
                  Limousine: <i>700.000 đồng</i> còn 550.000 đồng
                </div>
              </div>
              <div class="news-event-item">
                <img src={ChayVeXe}></img>
                <p class="event-name">
                  Tình trạng cháy vé trước dịp Tết Nguyên Đán Quý Mão
                </p>
                <p class="event-date">19/01/2022</p>
                <p class="event-description">
                  Theo thống kê của TRAVELBK, lượng vé xe bao gồm cả ba loại xe
                  của hãng là giường, phòng và Limousine đã được bán sạch trước
                  ngày 19/01/2023. Như vậy tình trạng vé xe về quê ăn Tết cùng
                  gia đình luôn là vấn đề nhức nhối đối với khách hàng trên toàn
                  quốc.
                </p>
              </div>
            </div>
            <div class="news-content-places">
              <div class="news-places-title">
                Những thắng cảnh TRAVELBK đã đến
              </div>
              <ul class="news-places-list">
                <li class="news-places-specification">
                  <img src={HueImage}></img>
                  <span>Huế</span>
                </li>
                <li class="news-places-specification">
                  <img src={NhaTrangImage}></img>
                  <span>Nha Trang</span>
                </li>
                <li class="news-places-specification">
                  <img src={HoiAnImage}></img>
                  <span>Hội An</span>
                </li>
                <li class="news-places-specification">
                  <img src={GiaLaiImage}></img>
                  <span>Gia Lai</span>
                </li>
                <li class="news-places-specification">
                  <img src={BinhDinhImage}></img>
                  <span>Binh Định</span>
                </li>
              </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
