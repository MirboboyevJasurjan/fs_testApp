import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startExamAction } from "../redux/question_reducer"; // Replace with the actual action import
import data from "../database/data"; // Import data fetching logic or API call here

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    // Async function fetch data (replace with your actual API call logic)
    (async () => {
      try {
        const response = await data(); // Replace with your API call

        if (response.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: response }));

          // Dispatch an action
          dispatch(startExamAction(response)); // Use the correct action and payload
        } else {
          throw new Error("No questions");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error.message }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};
