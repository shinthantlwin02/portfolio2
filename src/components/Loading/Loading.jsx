import React from "react";
import "./loading.css";
const Loading = () => {
  const words = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];
  return (
    <div className=" flex justify-center items-center h-screen bg-white">
      <div className="h-20  overflow-hidden flex items-baseline page">
        {words.map((w) => {
          return <h1 className="text">{w}</h1>;
        })}
      </div>
    </div>
  );
};

export default Loading;
