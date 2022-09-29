import React from "react";
import "../styles/work.css";
export default function Work() {
  return (
    <div className="work-inside-new mx-2 my-4">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
          <span className="company-name">Company Naùe</span>
          <span className="year-passedout">2021-present</span>
        </div>
      </div>
      <div className="d-flex flex-column">
        <span className="position">Full Stack Developer</span>
        <span className="description-position">
          <ul>
            <li>task1</li>
            <li>task2</li>
            <li>task3</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
