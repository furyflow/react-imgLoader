import React from "react";
import "./index.css";
import "./App.css";

function Data({ data }) {
  return (
    <div key="ind">
      {data &&
        data.map((item) => (
          <div className="row" key={item.id}>
            <img src={item.img1.value} alt="sa" />
            <img src={item.img2.value} alt="a" />
            <img src={item.img3.value} alt="a" />
          </div>
        ))}
    </div>
  );
}

export default Data;
