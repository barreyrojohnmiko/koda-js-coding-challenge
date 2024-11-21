import './styles.scss';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCorrectAnswers,
  setCurrentQuestionIndex,
  setUserAnswers,
} from '../../redux/App/action.tsx';
import { fetchQuizData } from '../../services/AppService.tsx';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    clearStates();
    fetchQuizData();
  }, []);

  const clearStates = () => {
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
