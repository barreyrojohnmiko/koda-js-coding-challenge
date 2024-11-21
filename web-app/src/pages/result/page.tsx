import './styles.scss';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ResultListView from '../../views/resultList/ResultList.tsx';

export default function ResultPage() {
  const { quizData, correctAnswers } = useSelector(
    (state: any) => state.appReducers
  );

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
