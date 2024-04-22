import React, { useState } from "react";

import icon from "../../assets/img/logo/icon.PNG";
import icon2 from "../../assets/img/logo2/icon2.PNG";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Link } from "react-router-dom";

const ShowDetailPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="container">
      <div className="main">
        <label className="main-Title">연극 - 두 여자</label>
        <img src="#" className="poster" />
        <div className="main-content">
          <div className="Information">
            <span className="area">장소</span>
            <span className="area-title">
              대학로 소극장 파랑새
              <br />
            </span>
            <span className="date">기간</span>
            <span className="date-main">2023.02.14~2094.04.20</span>
          </div>

          <div className="view-about">
            <span className="show-time">관람시간</span>
            <span className="run-time">
              170분
              <br />
            </span>
            <span className="view-etc">
              <br />
              관람등급
            </span>
            <span className="etc">전체연령가</span>
          </div>

          <div className="etc-price">
            <span className="class-price">가격</span>
            <span className="seat-VIP">VIP석 </span>
            <span className="seat-VIP-price">4억원</span>
            <span className="seat-name">
              <br /> R석{" "}
            </span>
            <span className="seat-R">2억원</span>
            <span className="seat-name2">
              <br /> S석{" "}
            </span>
            <span className="seat-S">1억원</span>
          </div>

          <div className="price-sail">
            <span className="sails">할인</span>
            <span className="sails-price">1억원</span>
            <Link to="">
              <img src={icon} class="Ellipse15"></img>
            </Link>
            <Link to="">
              <img src={icon2} class="Ellipse16"></img>
            </Link>
          </div>
        </div>

        <div className="Rectangle50">
          <div>
            <Calendar onChange={onChange} value={value} className="Calendar" />
            <div className="text-gray-500 mt-4"></div>
          </div>
          <label className="show-date-select">관람일 선택</label>
          <label className="show-session-select">회차 선택</label>
          <label className="show-remaining-seat">잔여 좌석</label>

          <button className="Rectangle51">1회 15시 30분</button>
          <button className="Rectangle52">2회 19시 30분</button>
          <div className="Line19"></div>
          <div className="Line20"></div>
          <div className="Line21"></div>
          <div class="seating">세입자석 4</div>
          <div className="seating2">일반석 75</div>

          <button class="Rectangle53">예매 하기</button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailPage;
