import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


import SelectPrice from "./SelectPrice";
import Modal from "../Modal";

const SeatSelection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleInviteUser = () => {
    setModalOpen(true);
  };

  return (
    <div id="seatSelectionContent">
      <div className="container">
        <div className="main">
          <div className="nav-b">
            <div className="Vector1"></div>
            <div className="Vector4"></div>
            <div className="Vector2"></div>
            <div className="Vector3"></div>
          </div>
          <div className="menu1">등급/좌석 선택</div>
          <div className="menu2">가격/할인 선택</div>
          <div className="menu3">배송선택/예매확인</div>
          <div className="menu4">결제하기</div>
        </div>
        <div className="content">
          {/* 타이틀,극장 날짜 부분 데이터베이스받기  */}
          <div className="title">연극 - 두여자</div>
          <div className="area-date">
            대학로 소극장 파랑새 | 2023.02.14 (화) 오후 7:30
          </div>
          <select className="select-box">
            <option selected>****-**-** 1회차</option>
            <option value="1">****-**-** 2회차</option>
            <option value="2">****-**-** 3회차</option>
            <option value="3">****-**-** 4회차</option>
          </select>
          <div className="content2">
            <div
              style={{
                width: 738,
                height: 690,
                left: 8,
                top: 20,
                position: "absolute",
                background: "#DDDDDD",
                borderRadius: 10,
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 78,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 134,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 190,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 246,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 302,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 414,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 470,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 526,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 582,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 638,
                top: 345,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 78,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 134,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 190,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 246,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 302,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 414,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 470,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 526,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 582,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 638,
                top: 397,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 78,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 134,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 190,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 246,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 302,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 414,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 470,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 526,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 582,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 638,
                top: 449,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 134,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 190,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 246,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 302,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 414,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 414,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 470,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 526,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 582,
                top: 501,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 134,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 190,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 246,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 302,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 358,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 414,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 414,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 470,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 526,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                left: 582,
                top: 553,
                position: "absolute",
                background: "white",
              }}
            />
            <div
              style={{
                width: 598,
                height: 156,
                left: 78,
                top: 125,
                position: "absolute",
                background: "#777777",
                borderRadius: 30,
              }}
            />
            <div
              style={{
                left: 336,
                top: 185,
                position: "absolute",
                color: "white",
                fontSize: 30,
                fontFamily: "Inter",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              stage
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                left: 359,
                top: 398,
                position: "absolute",
                background: "#888888",
              }}
            />
            <div class="container2">
              <div class="box">
                <div class="box-content">
                  R 석 30,000원
                  <br />S 석 15,000원
                </div>
              </div>
              <div class="content3">
                <div class="member">좌석등급 / 잔여석</div>
              </div>
              <div className="content4">
                <div className="member2">선택좌석</div>
                <div className="box2" />
                <div className="member3">
                  R 석<br />
                  J열 - 14
                </div>
                <div className="member4">총 1석 선택되었습니다</div>

                {/* <Link
                    to="/SelectPrice"
                    className="button"
                    type="submit"
                    value="post"
                  />
                  <div className="button-text">다음단계</div> */}
                <button className="button" onClick={handleInviteUser}>
                  다음단계
                </button>
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                  <SelectPrice />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
