import React, { useState, useEffect } from "react";
import data from "../database/data";


// Custom Hook
import { useFetchQuestion } from "../hooks/FetchQuestion";

function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{isLoading, apiData, serverError}, setGetData] = useFetchQuestion()
  const question = data[0];

  useEffect(() => {
    // console.log(question);
  });

  const onSelect = () => {
    // console.log("Radio btn change");
  };

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect()}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div className="check "></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
