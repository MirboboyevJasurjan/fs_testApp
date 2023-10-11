import React, { useEffect } from "react";
import Questions from "./Questions";

// redux store imoprt

import { useSelector } from "react-redux";

export default function Quiz() {
 
  const state = useSelector(state => state); //.questions

useEffect(() => {
  console.log(state);
});

  // Next btn event handler
  const onNext = () => {
    console.log("On next click");
  };
  // Prev btn event handler
  const onPrev = () => {
    console.log("On pext click");
  };

  return (
    <div className="container">
      <h1 className="title text-light"> Quiz Application</h1>

      {/* Display questions  */}
      <Questions />
      
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
