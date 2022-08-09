import React from "react";
import "../styles/programming.css";
export default function Programming() {
  const value = [
    {
      text: "tech1",
      percentage: 80,
    },
    {
      text: "tech2",
      percentage: 10,
    },
    {
      text: "tech3",
      percentage: 40,
    },
    {
      text: "tech4",
      percentage: 20,
    },
    {
      text: "tech4",
      percentage: 20,
    },
    {
      text: "tech4",
      percentage: 20,
    },
    {
      text: "tech4",
      percentage: 20,
    },
  ];
  return (
    <div>
      <div className="row">
        {value.map((value, index) => {
          return (
            <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
              <span className="language">{value.text}</span>
              <div className="progress-some">
                <div
                  className="progress-new"
                  style={{ width: `${value.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
