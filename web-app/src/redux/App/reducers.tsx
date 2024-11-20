import {
  SET_QUIZ_DATA,
  SET_CURRENT_QUESTION_INDEX,
  SET_CORRECT_ANSWERS,
  SET_USER_ANSWERS,
} from "./action.tsx";

const initialState = {
  quizData: [],
  currentQuestionIndex: 0,
  correctAnswers: 0,
  userAnswers: [],
};

const appReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_QUIZ_DATA:
      return { ...state, quizData: action.payload };
    case SET_CURRENT_QUESTION_INDEX:
      return { ...state, currentQuestionIndex: action.payload };
    case SET_CORRECT_ANSWERS:
      return { ...state, correctAnswers: action.payload };
    case SET_USER_ANSWERS:
      return { ...state, userAnswers: action.payload };
    default:
      return state;
  }
};

export default appReducers;
