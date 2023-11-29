import React, { useState } from "react";
import "./sidebar.scss";
import logo from "../../Assets/Logo.png";
import three from "../../Assets/three.png";
import dept from "../../Assets/dept.png";
import library from "../../Assets/library.png";
import addTeacher from "../../Assets/add-teacher.png";
import teacher from "../../Assets/teacher.png";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img src={logo} alt="logo" />
        <h1>QMS</h1>
        <img src={three} alt="three" />
      </div>
      <div className="sidebar__links">
        <div>
          <img src={teacher} alt="teacher" />
          <h2 className={isActive ? "white-bg" : ""} onClick={handleClick}>
            Teachers
          </h2>
        </div>
        <div>
          <img src={dept} alt="dept" />
          <h2 className={isActive ? "white-bg" : ""} onClick={handleClick}>
            Department
          </h2>
        </div>
        <div>
          <img src={library} alt="library" />
          <h2 className={isActive ? "white-bg" : ""} onClick={handleClick}>
            Library
          </h2>
        </div>
        <div>
          <img
            src={addTeacher}
            alt="addTeacher"
            className="addt"
            onClick={handleClick}
          />
          <h2
            className={isActive ? "white-bg" : "hideText"}
            onClick={handleClick}
          >
            Add Teachers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
