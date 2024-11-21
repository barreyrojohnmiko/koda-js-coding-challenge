import './styles.scss';

import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCurrentQuestionIndex } from '../../redux/App/action.tsx';

import { fetchQuizData } from '../../services/AppService.tsx';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    clearStates();
    fetchQuizData();
  }, []);

  const clearStates = () => {
    localStorage.removeItem('correctAnswers');
    localStorage.removeItem('userAnswers');
    dispatch(setCurrentQuestionIndex(0));
  };

  return (
    <Box className="page-container">
      <Box className="home-container">
        <Typography className="title">
          Welcome to the <br />
          Trivia Challenge!
        </Typography>

        <Typography>
          You will be presented with 10 True or False questions.
        </Typography>

        <Typography>Can you sore 100%?</Typography>

        <Link className="btn-begin" to="/quiz">
          BEGIN
        </Link>
      </Box>
    </Box>
  );
}
