import React from "react";
import { Link } from "react-router-dom";
import "../styles/Result.css";
import ResultTable from "./ResultTable";

function Result() {
  
  function onStart() {
    console.log("onStart");
  }

  return (
    <div className="container">
      <h2 className="title text-light">Quiz Application</h2>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">MJ</span>
        </div>
        <div className="flex">
          <span>Total quiz pont</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total questions</span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Total attempts</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Earn points</span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onStart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>

    </div>
  );
}

export default Result;
