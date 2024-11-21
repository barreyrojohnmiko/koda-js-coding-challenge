import { setQuizData } from '../redux/App/action.tsx';
import { Store } from '../redux/store.tsx';

import axios from 'axios';

export const fetchQuizData = async () => {
  const cachedData = localStorage.getItem('quizData');

  if (cachedData) {
    Store.dispatch(setQuizData(JSON.parse(cachedData)));
    return;
  }

  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
    );

    localStorage.setItem('quizData', JSON.stringify(response.data.results));
    Store.dispatch(setQuizData(response.data.results));
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return [];
  }
};
