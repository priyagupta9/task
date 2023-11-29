import React from "react";
import { tableData } from "../../data.js";
import "./table.scss";

const Table = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <th>Record ID</th>
          <th>Teacher Name</th>
          <th>Teacher ID</th>
          <th>Department</th>
          <th>Student</th>
          <th>Status</th>
          <th>Details</th>
        </thead>
        {tableData.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.tName}</td>
              <td>{item.tId}</td>
              <td>{item.department}</td>
              <td>{item.student}</td>
              <td>{item.status}</td>
              <td>{item.allDetails}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
