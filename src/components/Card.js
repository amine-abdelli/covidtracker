import React from "react";
import CountUp from "react-countup";

export const Card = ({ title, data, color, text, date }) => {
  const style = {
    borderBottom: `6px solid ${color}`,
  };
  return (
    <div className="card" style={style}>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="count">
        <CountUp start={0} end={data} duration={4} />
      </div>
      <div className="date">{date}</div>
      <div className="botText">
        <p>
          <small>{text}</small>
        </p>
      </div>
    </div>
  );
};
