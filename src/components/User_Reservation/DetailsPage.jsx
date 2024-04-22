import React from "react";
import { Link } from "react-router-dom";


const DetailsPage = () => {
  return (
    <div>
      <div className="Rectangle54">
        <Link to=""><div  className="view-detail">상세정보</div></Link>
      <Link to=""><div className="view-after">관람후기</div></Link>
      <Link to=""><div className="area-info">장소 정보</div></Link>
     <Link to=""> <div className="about-cancel">예매/취소안내</div></Link>
      </div>
      <div className="actor">출연진</div>

      <img class="Ellipse7" src="#" />
      <img class="Ellipse8" src="#" />
      <img class="Ellipse10" src="#" />
      <img class="Ellipse11" src="#" />
      <img class="Ellipse12" src="#" />
      <img class="Ellipse13" src="#" />
      <img class="Ellipse14" src="#" />
      <div className="actor2">
        {" "}
        <span>
          김지연
          <br />
        </span>
        <span>윤이서</span>
      </div>
      <div className="actor3">
        <span>
          김지연
          <br />
        </span>
        <span>윤이서</span>
      </div>
      <div className="actor4">
        <span>
          김지연
          <br />
        </span>
        <span>윤이서</span>
      </div>
      <div className="actor5">
        <span>
          김지연
          <br />
        </span>
        <span>윤이서</span>
      </div>
      <div className="actor6">
        <span>
          김지연
          <br />
        </span>
        <span>윤이서</span>
      </div>
      <div className="actor7">
        <span>
          김지연
          <br />
        </span>
        <span>윤이서</span>
      </div>
      <div className="actor8">
        <span>
          김지연
          <br />
        </span>
        <span>윤이서</span>
      </div>
      <img class="Rectangle56" src="#" />

      <div class="Rectangle49-1"></div>

      <div className="sub-guide">관람객 주의사항</div>
      <article class="Rectangle49"></article>
    </div>
  );
};

export default DetailsPage;
