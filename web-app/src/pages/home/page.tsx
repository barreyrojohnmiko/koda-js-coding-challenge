import "./styles.scss";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  setCorrectAnswers,
  setCurrentQuestionIndex,
  setQuizData,
  setUserAnswers,
} from "../../redux/App/action.tsx";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    clearStates();
  }, []);

  const clearStates = () => {
    dispatch(setQuizData([]));
    dispatch(setCurrentQuestionIndex(0));
    dispatch(setCorrectAnswers(0));
    dispatch(setUserAnswers([]));
  };

  return (
    <Box className="home-container">
      <Box className="title">
        <Typography variant="h2">Welcome to the Trivia Challenge!</Typography>
      </Box>

      <Box className="page-body">
        <Typography>
          You will be presented with 10 True or False questions.
        </Typography>

        <Typography>Can you sore 100%?</Typography>
      </Box>

      <Link className="btn-begin" to="/quiz">
        START
      </Link>
    </Box>
  );
}
