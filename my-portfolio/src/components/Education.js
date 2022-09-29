import React from "react";
import "../styles/education.css";
export default function Education() {
  return (
    <div className="d-flex flex-column">
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">university Name</span>
          <span className="university-degree">Diplome |Degree </span>
        </div>
        <div>
          <span className="year-passedout">2018-2020</span>
        </div>
      </div>

      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">university Name</span>
          <span className="university-degree">Diplome |Degree </span>
        </div>
        <div>
          <span className="year-passedout">2018-2020</span>
        </div>
      </div>

      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">university Name</span>
          <span className="university-degree">Diplome |Degree </span>
        </div>
        <div>
          <span className="year-passedout">2018-2020</span>
        </div>
      </div>
    </div>
  );
}
