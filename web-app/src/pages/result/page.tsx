import './styles.scss';

import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ResultListView from '../../views/resultList/ResultList.tsx';

import { loadQuizData } from '../../services/AppService.tsx';

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

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
        <Typography className="placeholder">Final Results</Typography>

        <Divider className="divider" />

        <Box className="score-container">
          <Typography className="title">
            You scored {correctAnswers} / {quizData?.length}
          </Typography>
        </Box>

        <Divider className="divider" />

        <Box className="page-body">
          <ResultListView />
        </Box>

        <Link className="btn-play-again" to="/">
          Play again
          <EastOutlinedIcon className="icon" />
        </Link>
      </Box>
    </Box>
  );
}
