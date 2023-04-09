import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.jpg";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <h1>BÁO ĐỜI</h1>
        <div className="user">
          <span>{currentUser?.username} </span>
          {currentUser ? (
            <span onClick={logout}>Log Out</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="container">
        <div className="links">
          <Link className="link" to="/?cat=star">
            <h5>Star</h5>
          </Link>
          <Link className="link" to="/?cat=tv-show">
            <h5>TV Show</h5>
          </Link>
          <Link className="link" to="/?cat=cine">
            <h5>Ciné</h5>
          </Link>
          <Link className="link" to="/?cat=musik">
            <h5>Musik</h5>
          </Link>
          <Link className="link" to="/?cat=beauty-fashion">
            <h5>Beauty&Fashion</h5>
          </Link>
          <Link className="link" to="/?cat=doi-song">
            <h5>Đời sống</h5>
          </Link>
          <Link className="link" to="/?cat=money-z">
            <h5>Money-Z</h5>
          </Link>
          <Link className="link" to="/?cat=the-gioi">
            <h5>Thế giới</h5>
          </Link>
          <Link className="link" to="/?cat=sport">
            <h5>Sport</h5>
          </Link>
          <Link className="link" to="/?cat=xa-hoi">
            <h5>Xã hội</h5>
          </Link>
          <Link className="link" to="/?cat=hoc-duong">
            <h5>Học đường</h5>
          </Link>
          <Link className="link" to="/?cat=video">
            <h5>Video</h5>
          </Link>

          <span className="write">
            <Link className="link" to="/write">
              {" "}
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
