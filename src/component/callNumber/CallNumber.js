import React from "react";
import ListNumber from "../listNumber/ListNumber";
import "./CallNumber.css";

const CallNumber = () => {
  const numbers = [
    {
      heading: "85",
      para: "projects done",
    },
    {
      heading: "30",
      para: "top specialists",
    },
    {
      heading: "10",
      para: "years of experience",
    },
    {
      heading: "50",
      para: "5.0 reviews",
    },
  ];

  return (
    <>
    <div className="uuvv">
    <div className="container-fluid" id="setting">
        {numbers.map((number, index) => (
          <ListNumber key={index} heading={number.heading} para={number.para} />
        ))}
      </div>
    </div>
      
    </>
  );
};

export default CallNumber;
