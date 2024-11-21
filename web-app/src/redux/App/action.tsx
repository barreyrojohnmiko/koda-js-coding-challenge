import { Dispatch } from "redux";

export const SET_QUIZ_DATA = "SET_QUIZ_DATA";
export const SET_CURRENT_QUESTION_INDEX = "SET_CURRENT_QUESTION_INDEX";
export const SET_CORRECT_ANSWERS = "SET_CORRECT_ANSWERS";
export const SET_USER_ANSWERS = "SET_USER_ANSWERS";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const setQuizData: any = (quizData: object) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_QUIZ_DATA,
    payload: quizData,
  });
};

export const setCurrentQuestionIndex: any =
  (currentQuestionIndex: number) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_CURRENT_QUESTION_INDEX,
      payload: currentQuestionIndex,
    });
  };

export const setCorrectAnswers: any =
  (correctAnswers: number) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_CORRECT_ANSWERS,
      payload: correctAnswers,
    });
  };

export const setUserAnswers: any =
  (userAnswers: object) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_USER_ANSWERS,
      payload: userAnswers,
    });
  };

export const setIsLoading: any =
  (isLoading: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_IS_LOADING,
      payload: isLoading,
    });
  };
