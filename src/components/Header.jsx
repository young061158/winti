import React from "react";
import Logo from "../assets/img/logo2/logoMain.png";
import { ReactComponent as Input } from "../assets/img/input/inputbutten.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_All">
      <div className="header_header">
        <div className="login-signup">
          <Link className="navbar-brand" to={"/Login"}>
            로그인
          </Link>
          <Link className="navbar-brand" to={"/Join_Member"}>
            회원가입
          </Link>
        </div>
      </div>

      <div className="header_body">
        <div className="logo_search">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <Input />
          </div>
        </div>
      </div>

      <div className="header_footer">
        <div className="nav">
          <ul>
            <li>
              <a href="#">연극</a>
            </li>
            <li>
              <a href="#">뮤지컬</a>
            </li>
            <li>
              <a href="#">콘서트</a>
            </li>
            <li>
              <a href="#">클래식</a>
            </li>
            <li>
              <a href="#">아동</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
