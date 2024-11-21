import {
  setCorrectAnswers,
  setIsLoading,
  setQuizData,
  setUserAnswers,
} from "../redux/App/action.tsx";
import { Store } from "../redux/store.tsx";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://opentdb.com",
});

export const fetchQuizData = async () => {
  Store.dispatch(setIsLoading(true));

  const cachedQuizData = localStorage.getItem("quizData");

  if (cachedQuizData) {
    Store.dispatch(setQuizData(JSON.parse(cachedQuizData)));
    return;
  }

  try {
    const response = await axiosInstance.get(
      "/api.php?amount=10&difficulty=easy&type=boolean"
    );

    localStorage.setItem("quizData", JSON.stringify(response.data.results));
    Store.dispatch(setIsLoading(false));
    return response;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return;
  }
};

export const loadQuizData = async () => {
  const cachedQuizData = localStorage.getItem("quizData");
  const cachedCorrectAnswers = localStorage.getItem("correctAnswers");
  const cachedUserAnswers = localStorage.getItem("userAnswers");

  if (cachedQuizData) {
    Store.dispatch(setQuizData(JSON.parse(cachedQuizData)));
  } else {
    const data = await fetchQuizData();
    Store.dispatch(setQuizData(data));
    localStorage.setItem("quizData", JSON.stringify(data));
  }

  if (cachedCorrectAnswers) {
    Store.dispatch(setCorrectAnswers(cachedCorrectAnswers));
  } else {
    Store.dispatch(setCorrectAnswers(0));
  }

  if (cachedUserAnswers) {
    Store.dispatch(setUserAnswers(JSON.parse(cachedUserAnswers)));
  } else {
    Store.dispatch(setUserAnswers([]));
  }
};
