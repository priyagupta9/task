import React from "react";
import bell from "../../Assets/bell.png";
import filter from "../../Assets/filter.png";
import user from "../../Assets/user.png";
import right from "../../Assets/right.png";
import search from "../../Assets/search.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Welcome, User! </h1>
      </div>
      <div className="middle">
        <div className="search-box">
          <div>
            <img src={search} alt="search" />
            <h2>Search here...</h2>
          </div>
          <img src={right} alt="right" />
        </div>
        <div className="filter">
          <img src={filter} alt="filter" />
        </div>
      </div>
      <div className="right">
        <img src={bell} alt="notification" />
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Navbar;
