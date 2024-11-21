import './styles.scss';

import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ResultListView from '../../views/resultList/ResultList.tsx';
import { loadQuizData } from '../../services/AppService.tsx';

export default function ResultPage() {
  const { quizData, correctAnswers } = useSelector(
    (state: any) => state.appReducers
  );

  useEffect(() => {
    loadQuizData();
  }, []);

  return (
    <Box className="page-container">
      <Box className="result-container">
        <Typography className="title">
          You scored <br /> {correctAnswers} / {quizData?.length}
        </Typography>

        <Box className="page-body">
          <ResultListView />
        </Box>

        <Link className="btn-play-again" to="/">
          PLAY AGAIN?
        </Link>
      </Box>
    </Box>
  );
}
