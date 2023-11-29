import React from "react";
import Sidebar from "./SideBar/Sidebar";
import Navbar from "./Navbar/Navbar";
import "./home.scss";
import Table from "./Table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div>
        <Navbar />
        <Table />
      </div>
    </div>
  );
};

export default Home;
