import { Store } from "../redux/store.tsx";
import { setQuizData } from "../redux/App/action";

import axios from "axios";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean"
    );
    Store.dispatch(setQuizData(response));
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return [];
  }
};
