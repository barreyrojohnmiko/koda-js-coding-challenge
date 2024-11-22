import './styles.scss';

import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCurrentQuestionIndex } from '../../redux/App/action.tsx';

import { fetchQuizData } from '../../services/AppService.tsx';

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

import appLogo from '../../images/logo.png';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    clearStates();
    fetchQuizData();
  }, []);

  const clearStates = () => {
    localStorage.removeItem('correctAnswers');
    localStorage.removeItem('userAnswers');
    localStorage.removeItem('quizData');
    dispatch(setCurrentQuestionIndex(0));
  };

  return (
    <Box className="page-container test">
      <Box className="home-container">
        <img src={appLogo} alt="Koda" className="logo" />

        <Box className="title-container">
          <Typography className="title">
            Welcome to the Trivia Challenge!
          </Typography>

          <Typography className="subtitle">
            You will be presented with 10 True or False questions.
          </Typography>
        </Box>

        <Box className="score-container">
          <Typography className="label">Can you sore 100%?</Typography>
        </Box>

        <Divider className="divider" />

        <Box className="button-container">
          <Link className="btn-begin" to="/quiz">
            Begin
            <EastOutlinedIcon className="icon" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
